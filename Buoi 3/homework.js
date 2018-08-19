const express = require('express');
const path = require('path');
const url = require('url');
let app = express();
app.get('/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`)
})
app.get('/',(req,res)=>{
    var q=url.parse(req.url,true);
    res.send("Hello "+ q.query.name);
})
app.listen(6969,(err) =>{
    if (err) console.log(err);
    else console.log('Server is listening at port 6969');
});