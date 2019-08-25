// const mongoose = require ('mongoose')

// const Schema = mongoose.Schema

// const studentSchema = new Schema({
//         name: String,
//         email: String,
//         password: String,
//         class: String,
//         status: String
// })
// //here student is the file student.js, studentSchema is above, 'students_dev is collection of mongoDB'
// module.exports = mongoose.model('student',  studentSchema, 'students_dev')


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
        name: String,
        email: String,
        password: String,
        class: String
      
});

 module.exports = mongoose.model('student', studentSchema, 'students_dev')