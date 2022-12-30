/*// Import http library
const http = require("http")

// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 4000

//create our server object
const server = http.createServer()

// We define a function that runs in response a request event
server.on("request", (request, response) => {
  // handle request based on method then URL
  
  if(request.url==='/'){
    response.statusCode = 200
    response.write("Hello World")
    response.end()
  }else if(request.url==='/test'){
  response.statusCode = 200
    response.write('test it')
    response.end()
  }
  
  
})

// get the server to start listening
server.listen(PORT, err => {
  // error checking
  err ? console.error(err) : console.log(`listening on port ${PORT}`)
})*/

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send(`hello`))

app.get('/test',(req,res)=>{
  return res.json('123test')
})

app.listen(port, () => {
    console.log(`listing on port ${port}`)
})


