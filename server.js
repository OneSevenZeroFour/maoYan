var express = require("express");
var app = express();
var http = require("http");
var data = "";
var result = "";


function limit(lm){
	http.get('http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit='+lm,function(res){
	  res.setEncoding('utf8');
	  res.on('data',function(chunk){
	    data += chunk;
	  })
	  res.on('end',function(){
	    //console.log(data);
	  })
	}).on("error", function() {
	    console.log("请求myUrl地址出错！");
	})
}


/*function LS(num){
	console.log(num);
	http.get('http://m.maoyan.com/movie/'+num+'.json',function(res){
	  res.setEncoding('utf8');
	  res.on('data',function(chunkk){
	    result += chunkk;
	  })
	  res.on('end',function(){
	    //console.log(data);   
	  })
	}).end();
}*/


app.get('/faa',function(req, resp){
	resp.append('Access-Control-Allow-Origin','*');
	var LM = req.query.lm;
	limit(LM);
	resp.send(data);
})


/*app.get('/ls',function(req, resp){
	resp.append('Access-Control-Allow-Origin','*');
	var rr = req.query.url;
	console.log(rr);
	LS(rr);
	resp.send(result);
})*/


app.listen(2345);
console.log("ok");
