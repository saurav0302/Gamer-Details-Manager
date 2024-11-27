const express = require('express')
const session = require('express-session')
const db = require('./config/db')
const passport = require('passport')
const path = require('path');
require('dotenv').config()
require('./Middleware/auth')

const app = express()
app.use(session({
    secret: process.env.SECRET_KEY,
}))
app.use(passport.initialize())
app.use(passport.session())
// const cors = require('cors')

app.use(express.static('public'))
// app.use(cors())

// Function to check it loggedin or not
function isLoggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.sendstatus(401);
    }
}

const bodyParser=require('body-parser')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/auth/google', (req, res) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
});

app.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/welcome',
        failureRedirect: '/failure',
    })
);

app.use('/welcome', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, './public/form.html'));
});

app.use('/failure', (req, res) => {
    res.sendFile(path.join(__dirname, './public/google.html'));
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const gamerDataRouter = require('./Routes/GamerData')
app.use('/data', isLoggedIn, gamerDataRouter)


app.listen(process.env.PORT, () => {
    console.log("Server is on at port no : ",process.env.PORT );
})