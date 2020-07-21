const express = require('express') //import express
const nunjucks = require('nunjucks') //import nunjucks

const server = express() //create a server and execute express

const videos = require ("./data") // get data form data.js, ./ references root 

server.set("view engine", "html")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    autoescape: false, //allows to print html in a variable
    noCache: true
})

//Rotas
server.get("/", function (req, res) { //req = request, res = respond
    const about = {
        avatar_url:"https://avatars0.githubusercontent.com/u/18017083?s=400&u=efa162ed5c88f927283a47e2e304c5f6b7fe65a8&v=4",
        nome:"Pedro Lopes",
        role:'Student - <a href="https://rocketseat.com.br/" target="_blank" id="links-wrapper">Rocketseat</a>',
        description:'Full-Stack website developer, focused on using technology to help people and local communities. Check out my <a href="https://www.pedroclopes.com" target="_blank" id="links-wrapper">porfolio</a>',
        links:[
            { name:"Github", url: "https://github.com/gitpcl" },
            { name:"Twitter", url: "https://twitter.com/pedrclopes" },
            { name:"Linkedin", url: "https://www.linkedin.com/in/pedro-c-lopes" }
        ]
    }

    return res.render("about", { about }) // {about: about} is the same as { about }
})

server.get("/favorite", function (req, res) { //req = request, res = respond
    return res.render("favorite", {items:videos})
})

server.get("/video", function(req,res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video",{ item: video })
})

server.listen(5500, function () { //initialize server on port 5000, callback is a function that executes after listen is executed
    console.log("server is running")
})