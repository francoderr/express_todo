var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var port =  8080;

var app = express();

//view engine setup
app.set("views", path.json(_dirname, "views"));
app.set("view engine", "jade");

//app.use(favicon(_dirname + '/public/favion.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
//telling express to serve static objects from /public
app.use(express.static(path.join(_dirname, 'public')));

// Routes
var main = require('./routes/main');
var todo = require('./routes/todo');
var todoRouter = express.Router();
app.use('/todos', todoRouter);

app.get('/', main.index);
todoRouter.get('/', todo.all);
todoRouter.post('/create', todo.create);
todoRouter.post('/destroy/:id', todo.destroy);
todoRouter.post('/edit/:id', todo.edit);

//start server
app.listen(port, function() {
    console.log("server is listening on port " + port);
});