const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
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
    attendanceRecords: [attendanceRecordSchema]
},
    { timestamps: true }
);

// Create a model based on that schema
const Mydata = mongoose.model("Mydata", articleSchema);

// export the model
module.exports = Mydata;
