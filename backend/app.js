var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 
var userRouter = require('./routes/users')
var verifyToken = require('./middlewares/authorization')
var studentRouter = require('./routes/students')
var authRouter = require('./routes/authorization')
var matiereRouter = require('./routes/matiere')
var noteRouter = require('./routes/note')
 const db = require('./config/db');
const dotenv = require('dotenv') 

var app = express();
 db() 

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, authorization");
  next();
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRouter)
app.use('/login',  userRouter)
app.use('/student', studentRouter)
app.use('/auth', authRouter)
app.use('/getMatiere', matiereRouter)
app.use('/note', noteRouter)





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
