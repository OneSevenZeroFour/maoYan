var express = require("express")

var app = express();
var http = require("http");

app.get('/cinemaJson',function(req, resp){
    resp.set('Access-Control-Allow-Origin','*');
    http.get('http://m.maoyan.com/cinemas.json',function(res){
      var data = '';
      res.setEncoding('utf8')
      res.on('data',function(chunk){
        data += chunk;
      })
      res.on('end',function(){
        console.log(data)
      })
    })

})
app.listen(2345);
console.log("ok")
