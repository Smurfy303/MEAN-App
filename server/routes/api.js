const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
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
			var ts = {
				'email':data[0].email,
				'user_id':data[0]._id
			}
			var token = jwt.sign(ts, 'kiransecret' , { expiresIn: '1h' });
			user_model.saveToken(token , data[0].email , (success) => {
				
				res.json({'status' : 200, 'msg' : 'Login Successfully', 'token': success.token});
			})

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

	student_model.checkEmailExist(req.body.semail , (err, ischeck) =>{

		if(err)
			res.json({'status' : 500, 'msg' : 'Something went wrong...!'})
		else if(ischeck.length != 0){
			
				res.json({'status' : 500, 'msg' : 'Email already exist...!'})
			
			}else{

				student_model.saveStudents(req.body , (err, resData) => {

					if(err)
						res.json({'status' : 500, 'msg' : 'Something went wrong...!'})
					else
						res.json({'status' : 200, 'msg' : 'Stored Successfully'})
				})			
			}
	})
	
});

router.post('/updateStudent' , (req,res) => {

	student_model.checkEmailExist(req.body.semail , (err, ischeck) =>{

		if(err){
			res.json({'status' : 500, 'msg' : 'Something went wrong...!'})
		}

		else if(ischeck.length !=0 ){

			student_model.updateStudent(req.body , (err, updated) => {

				if(err)
					res.json({'status' : 500, 'msg' : 'Something went wrong...!'})
				else if(updated){
					res.json({'status' : 200, 'msg' : 'Stored Successfully'})
				}else{
					res.json({'status' : 500, 'msg' : 'Email Id does not Exist...!'})
				}

			}) 
		

		}else{
			res.json({'status' : 500, 'msg' : 'Email Id does not exist...!'})
		}
	});
})


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


router.delete('/deleteStudent/:id' , (req,res) => {

	var stud_id = req.params.id;
	student_model.deleteStudentById(stud_id , (err, deleteData) => {
		if(err) throw err;

		res.send(deleteData);
	})
})
module.exports = router;