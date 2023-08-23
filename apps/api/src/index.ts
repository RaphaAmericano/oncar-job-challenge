import express from "express"
import cors from "cors"
import { json, urlencoded } from "body-parser"
import routes from "./routes"
const port = process.env.API_PORT || 3001
const server = express()
server.use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use(routes)

server.get("/", function(req, res, next){
    res.send("Ok!")
})

server.listen(port, function(){
    console.log(`Api running on ${port}`)
})
