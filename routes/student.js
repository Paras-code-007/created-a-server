// const express=require('express')
// const router=express.Route
// const route= router()
const express= require('express')
const route=express.Router()

let student=[
    {name:"rahul",college:"dtu",year:"I"},
    {name:"neha",college:"jiit",year:"II"},
    {name:"satish",college:"iiit",year:"III"},
    {name:"parul",college:"nsit",year:"IV"}
]

route.get('/',function (req,res) {
    res.send(student)
})

route.post('/',function (req,res) {
    student.push({
        name: req.body.name,
        college: req.body.college,
        year: req.body.year
    })
    res.send(student)
})

route.get('/:id',function (req,res) {
    res.send(student[req.params.id])
})

module.exports= route
