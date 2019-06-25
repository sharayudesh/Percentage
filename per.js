var http= require('http');
var fs=require('fs');
var query=require('querystring');
var url=require('url');
var m=require('./stdmodule');
function process(req,res)
{
    var u=url.parse(req.url);
    console.log(u);
    switch(u.pathname)
    {
        case "/":
       var data=fs.readFileSync("student.html");
       res.write(data);
       res.end();
        break;
        case"/submit":
        res.write("<h1>"+"Percentage Calculation"+"</h1>");
        var q=query.parse(u.query);
        res.write("<h3>Name:"+q.sname+"</h3>"+"<br>");
        var result=m.calcpercentage(q.m,q.p,q.c);
        res.write("Percentage: "+result);
        res.end();
        break;
    }
    res.end();
}

var server=http.createServer(process);
server.listen(8000);
console.log("running at 8000");