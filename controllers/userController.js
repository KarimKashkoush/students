const moment = require('moment');
const hijri = require('moment-hijri');
const Mydata = require('../models/myData');

const login = (req, res) => {
    res.render('login')
}

const signup = (req, res) => {
    Mydata.find()
        .then((result) => { res.render('signup', { arr: result }); })
        .catch((err) => {
            console.log(err);
        });
}

const skills = (req, res) => {
    Mydata.find()
        .then((result) => { res.render('skills', { arr: result }); })
        .catch((err) => {
            console.log(err);
        });
}

const index = (req, res) => {
    Mydata.find()
        .then((result) => { res.render('index', { arr: result, moment: moment, hijriDate: hijri }); })
        .catch((err) => {
            console.log(err);
        });
}

const add = (req, res) => {
    res.render('add');
}

const addMongo = (req, res) => {
    const Data = new Mydata(req.body);
    Data.save().then(() => {
        res.redirect('/pages/add.html');
    });
}

const findStudent = (req, res) => {
    Mydata.findByIdAndDelete(req.params.id)
        .then(() => { res.redirect('/pages/list.html'); })
        .catch((err) => { console.log(err); });
}

const list = (req, res) => {
    Mydata.find()
        .then((result) => { res.render('list', { arr: result }); })
        .catch((err) => {
            console.log(err);
        });
}

const edit = (req, res) => {
    Mydata.findById(req.params.id)
        .then((result) => { res.render('edit', { obj: result }); })
        .catch((err) => {
            console.log(err);
        });
}

const editMongo = (req, res) => {
    Mydata.updateOne({ _id: req.params.id }, req.body)
        .then(() => { res.redirect('/'); })
        .catch((err) => {
            console.log(err);
        });
}

const findStudentView = (req, res) => {
    Mydata.findById(req.params.id)
        .then((result) => { res.render('view', { object: result, moment: moment }); })
        .catch((err) => {
            console.log(err);
        });
}


module.exports = { index, add, addMongo, findStudent, list, edit, editMongo, findStudentView, skills, login, signup }