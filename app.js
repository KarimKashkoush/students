const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const moment = require('moment');
const methodOverride = require('method-override');
const hijri = require('moment-hijri');

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const Mydata = require('./models/myData');


// Connect to MongoDB
mongoose.connect("mongodb+srv://studentsName:6BJSOredO4wouN9v@cluster0.g0ywcmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(err);
});

// Function to find today's attendance record
const findTodayAttendanceRecord = (attendanceRecords) => {
    const todayStart = moment().startOf('day');
    const todayEnd = moment().endOf('day');
    return attendanceRecords.find(record => moment(record.date).isBetween(todayStart, todayEnd, null, '[]'));
};

// Update attendance to 'حاضر'
app.put('/pages/attendance/:id/present', async (req, res) => {
    try {
        const student = await Mydata.findById(req.params.id);
        if (student) {
            const todayRecord = findTodayAttendanceRecord(student.attendanceRecords);
            if (todayRecord) {
                todayRecord.status = 'حاضر';
                todayRecord.date = new Date();
            } else {
                student.attendanceRecords.push({ status: 'حاضر', date: new Date() });
            }
            await student.save();
        }
        res.redirect('/pages/list.html');
    } catch (err) {
        console.log(err);
    }
});

// Update attendance to 'غائب'
app.put('/pages/attendance/:id/absent', async (req, res) => {
    try {
        const student = await Mydata.findById(req.params.id);
        if (student) {
            const todayRecord = findTodayAttendanceRecord(student.attendanceRecords);
            if (todayRecord) {
                todayRecord.status = 'غائب';
                todayRecord.date = new Date();
            } else {
                student.attendanceRecords.push({ status: 'غائب', date: new Date() });
            }
            await student.save();
        }
        res.redirect('/pages/list.html');
    } catch (err) {
        console.log(err);
    }
});

app.post('/pages/attendance/:id/notes', async (req, res) => {
    try {
        const student = await Mydata.findById(req.params.id);
        if (student) {
            student.notes.push({
                behavior: req.body.behavior,
                action: req.body.action
            });
            await student.save();
        }
        res.redirect('/pages/list.html');
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred');
    }
});

// Other routes (e.g., get, post, delete)

app.get('/', (req, res) => {
    Mydata.find()
        .then((result) => { res.render('index', { arr: result, moment: moment, hijriDate: hijri }); })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/pages/add.html', (req, res) => {
    res.render('add');
});

app.post('/pages/add.html', (req, res) => {
    const Data = new Mydata(req.body);
    Data.save().then(() => {
        res.redirect('/pages/add.html');
    });
});

app.delete('/pages/:id', (req, res) => {
    Mydata.findByIdAndDelete(req.params.id)
        .then(() => { res.redirect('/pages/list.html'); })
        .catch((err) => { console.log(err); });
});

app.get('/pages/list.html', (req, res) => {
    Mydata.find()
        .then((result) => { res.render('list', { arr: result }); })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/pages/edit.html/:id', (req, res) => {
    Mydata.findById(req.params.id)
        .then((result) => { res.render('edit', { obj: result }); })
        .catch((err) => {
            console.log(err);
        });
});

app.put('/pages/edit.html/:id', (req, res) => {
    Mydata.updateOne({ _id: req.params.id }, req.body)
        .then(() => { res.redirect('/'); })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/pages/:id', (req, res) => {
    Mydata.findById(req.params.id)
        .then((result) => { res.render('view', { object: result, moment: moment }); })
        .catch((err) => {
            console.log(err);
        });
});
