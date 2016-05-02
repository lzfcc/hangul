var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var compiler = require('./routes/compiler');
var markdown = require('./routes/markdown');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
/*app.engine('hbs', exphbs({
  layoutsDir: 'views',
  defaultLayout: 'layout',
  extname: '.hbs'
}));*/
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/codesire', compiler);
app.use('/markdown', markdown);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.get('/fullStat' , function(req , res ){
    compiler.fullStat(function(data){
        res.send(data);
    });
});


module.exports = app;

//app.js文件的详细解释：http://www.tuicool.com/articles/U7buiy
//终止程序请用Ctrl＋C
//如果遇到端口占用，请用lsof -i:[port]查看port端口被哪个进程占用，然后强制杀死进程sudo kill -s 9 [pid]