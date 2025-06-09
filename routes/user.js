const express = require('express');
const {handleUserSignup, handleUserlogin} = require('../controllers/user')


const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login",handleUserlogin  );


router.get("/signup", (req, res) => {
    return res.render('signup');
})

router.get("/login", (req, res)=> {
    return res.render('login');
})

module.exports = router;