const express = require('express');
const router = express.Router();

var user_model = require('../models/user.js');

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

	console.log(req.body.fname);
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
module.exports = router;