const express = require('express')
const router = express.Router()

const moment = require('moment');
const hijri = require('moment-hijri');
const Mydata = require('../models/myData');
const userController = require("../controllers/userController")

// Function to find today's attendance record
const findTodayAttendanceRecord = (attendanceRecords) => {
    const todayStart = moment().startOf('day');
    const todayEnd = moment().endOf('day');
    return attendanceRecords.find(record => moment(record.date).isBetween(todayStart, todayEnd, null, '[]'));
};

// Update attendance to 'حاضر'
router.put('/pages/attendance/:id/present', async (req, res) => {
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
router.put('/pages/attendance/:id/absent', async (req, res) => {
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

router.post('/pages/attendance/:id/notes', async (req, res) => {
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

router.get('/', userController.index)

router.get('/pages/add.html', userController.add);

router.post('/pages/add.html', userController.addMongo);

router.delete('/pages/:id', userController.findStudent);

router.get('/pages/list.html', userController.list);

router.get('/pages/edit.html/:id', userController.edit);

router.put('/pages/edit.html/:id', userController.editMongo);

router.get('/pages/:id', userController.findStudentView);







module.exports = router