var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var stud_data = mongoose.Schema({

	sfname : {type:String },
	slname : {type:String},
	semail : {type:String},
	susername : {type:String},
	spassword : {type:String},

});

var student_model = module.exports = mongoose.model('student' , stud_data);


module.exports.saveStudents = function(stud_data, callback){

	student_model.create(stud_data , callback);
}


module.exports.getStudents = function(callback){

	student_model.find({} , callback);
}

module.exports.getStudentById = function(stud_id , callback){
	student_model.find({'_id' : stud_id} , callback);
}

module.exports.deleteStudentById = function(id , callback){
	student_model.findOneAndRemove({'_id' : id} , callback);
}

module.exports.checkEmailExist = function(email_id, callback){
	student_model.find({'semail' : email_id}, callback);
}

module.exports.updateStudent = function(stud_data , callback){

	student_model.findOneAndUpdate({'semail' : stud_data.semail}, stud_data, callback);
}