const express=require('express')
const server= express()

server.use(express.json)
server.use(express.urlencoded)

const studentroute= require('./routes/student')
//middleware of json and urlencoded should be before using the rootes so that the post reques could go through middleware and get decoded 
server.use('/student',studentroute)

server.listen(3452)