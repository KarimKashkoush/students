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
router.put('/attendance/:id/present', async (req, res) => {
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
        res.redirect('/list');
    } catch (err) {
        console.log(err);
    }
});

// Update attendance to 'غائب'
router.put('/attendance/:id/absent', async (req, res) => {
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
        res.redirect('/list');
    } catch (err) {
        console.log(err);
    }
});

router.post('/attendance/:id/notes', async (req, res) => {
    try {
        const student = await Mydata.findById(req.params.id);
        if (student) {
            student.notes.push({
                behavior: req.body.behavior,
                action: req.body.action
            });
            await student.save();
        }
        res.redirect('/list');
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred');
    }
});

router.post('/skills/:id/skill', async (req, res) => {
    try {
        const student = await Mydata.findById(req.params.id);
        if (student) {
            student.skill.push({
                semester: req.body.semester,
                subject: req.body.subject,
                skill: req.body.skill,
                evaluation: req.body.evaluation
            });
            await student.save();
        }
        res.redirect('/list');
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred');
    }
});

// Other routes (e.g., get, post, delete)

router.get('/', userController.index)

router.get('/skills', userController.skills)

router.get('/add', userController.add);

router.post('/add', userController.addMongo);

router.delete('/:id', userController.findStudent);

router.get('/list', userController.list);

router.get('/edit/:id', userController.edit);

router.put('/edit/:id', userController.editMongo);

router.get('/:id', userController.findStudentView);




module.exports = router