const express = require('express');
const router = express.Router();

var user_model = require('../models/user.js');
var student_model = require('../models/student.js');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/login' , (req,res) => {

	var uname = req.body.username;
	var pwd =req.body.password;

	user_model.checkCredentials(req.body , (err, data) => {

		if(err) throw err;

		if(data.length !=0){
			res.json({'status' : 200, 'msg' : 'Login Successfully'});
		}else{
			res.json({'status' : 404, 'msg' : 'Invalid Username or Password'});
		}
	})
	
});



router.post('/register' , (req,res) => {

	user_model.checkEmailExist(req.body.email , (isEmailExist) => {

			if(isEmailExist != ''){
				res.json({'status' : 404, 'msg' : 'Email Id Already in use.'})
			}else{

				user_model.registerUser(req.body , (err, success) => {

					if(err) throw err;
					else
						res.json({'status' : 200, 'msg' : 'Registration Successfully Completed'})
					
				})
			}
	})

});


router.post('/addStudData' ,(req,res) => {

	student_model.saveStudents(req.body , (err, resData) => {

		if(err)
			res.json({'status' : 500, 'msg' : 'Something Went Wrong....!'})
		else
			res.json({'status' : 200, 'msg' : 'Stored Successfully'})
	})
});


router.get('/getStudData' , (req,res) => {

	student_model.getStudents((err , stds) => {
		if(err) throw err;

		res.send(stds);
	})
})


router.get('/editStudent/:id' , (req,res) => {

	var stud_id = req.params.id;
	student_model.getStudentById(stud_id , (err, edit) => {
		if(err) throw err;

		res.send(edit);
	})

})


router.get('/deleteStudent/:id' , (req,res) => {

	var stud_id = req.params.id;
	student_model.deleteStudentById(stud_id , (err, deleteData) => {
		if(err) throw err;

		res.send(deleteData);
	})
})
module.exports = router;