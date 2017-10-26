var express = require("express");
var app = express();
var http = require("http");
app.get('/faa',function(req, resp){
	resp.append('Access-Control-Allow-Origin','*');
    let data = "";
    http.get('http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit='+req.query.lm,function(res){
      res.setEncoding('utf8');
      res.on('data',function(chunk){
        data += chunk;
      })
      res.on('end',function(){
        resp.send(JSON.parse(data));
        console.log(typeof JSON.stringify(data));
        console.log(typeof JSON.parse(data).control);
      })
    }).on("error", function() {
        console.log("请求myUrl地址出错！");
    })

})


app.get('/ls',function(req, resp){
    let result = "";
	resp.append('Access-Control-Allow-Origin','*');
    http.get('http://m.maoyan.com/movie/'+req.query.url+'.json',function(res){
      res.setEncoding('utf8');
      res.on('data',function(chunkk){
        result += chunkk;
      })
      res.on('end',function(){
        resp.send(JSON.parse(result));  
      })
    }).on("error", function(){
        console.log("请求myUrl地址出错！");
    });
})
app.get('/cinemaJson',function(req, resp){
    resp.append('Access-Control-Allow-Origin','*');
    http.get('http://m.maoyan.com/cinemas.json',function(res){
      let data = '';
      res.setEncoding('utf8')
      res.on('data',function(chunk){
        data += chunk;
      })
      res.on('end',function(){
        resp.send(JSON.parse(data));  
      })
    }).on("error", function(){
        console.log("请求myUrl地址出错！");
    });

})
app.listen(2345);
console.log("ok12")

