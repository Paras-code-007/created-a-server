const express=require('express')
const server= express()
const port = 3000;


//support parsing of application/x-www-form-urlencoded post data
server.use(express.json());
//server.use(bodyParser.urlencoded({ extended: true }));

const studentroute= require('./routes/student.js')
server.use('/student',studentroute)


server.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });

server.use(function (req, res, next) {
    console.log('Request Time:', Date.now())
    next(req, res)
  })

//middleware of json and urlencoded should be before using the rootes so that the post reques could go through middleware and get decoded 



