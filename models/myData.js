const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const skillSchema = new Schema({
    semester: String,
    subject: String,
    skill: String,
    evaluation: String
}, { _id: false });

// define the Schema (the structure of the article)
const notesSchema = new Schema({
    behavior: String,
    action: String,
    date: {
        type: Date,
        default: Date.now
    }
}, { _id: false });

const attendanceRecordSchema = new Schema({
    status: {
        type: String,
        enum: ['حاضر', 'غائب'],
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, { _id: false });

const articleSchema = new Schema({
    fullName: String,
    nationality: String,
    tele: Number,
    Country: String,
    email: String,
    emailStudent: String,
    Semester: String,
    job: String,
    transport: String,
    healthy: String,
    notes: [notesSchema],
    attendanceRecords: [attendanceRecordSchema],
    skill: [skillSchema]
},
    { timestamps: true }
);

// Create a model based on that schema
const Mydata = mongoose.model("Mydata", articleSchema);

// export the model
module.exports = Mydata;
