const express = require("express");
const app = express();
// const fetch = require("node-fetch");

app.get("/api/games",  async (request, response)=>{
    // response.send("<h1>Welcome back to Express </h1>");
    const res = await fetch("https://www.freetogame.com/api/games");
    const data = await res.json();
    // console.log(data)
    response.json(data);
})

app.listen(5000, ()=>{
    console.log("Server is running at port 5000..")
})