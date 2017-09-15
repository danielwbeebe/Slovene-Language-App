const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}!`);
});

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
