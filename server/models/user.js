var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var user_data = mongoose.Schema({

	fname : {type:String },
	lname : {type:String},
	email : {type:String, index: { unique: true }},
	username : {type:String},
	password : {type:String},
	token : {type : String}

});


var user_model = module.exports = mongoose.model('user' , user_data);


module.exports.checkEmailExist = function(emailId , callback){
	
	user_model.find({'email' : emailId} , (err, isExist) => {

		if(err) throw err;

		callback(isExist);
	})
}

module.exports.registerUser= function (reg_data , callback){

	user_model.create(reg_data , callback);
	
}

module.exports.checkCredentials = function(login , callback){

	user_model.find({'username' : login.username , 'password' : login.password} , callback);
}

module.exports.saveToken = function(token , uemail , callback) {

	user_model.findOneAndUpdate({'email' : uemail},{'token' : token} ,{new:true}, (err, user_token) => {

		if(err)
			throw err;
		else
			callback(user_token);
	})
}