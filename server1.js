var express = require("express")
var app = express();
var http = require("http");
app.get('/cina',function(req, res){
      res.append('Access-Control-Allow-Origin','*');
      var para = req.query.para;
      console.log(para)
      getmsg(para,res);
      
})
app.listen(23456);
console.log("ok")
function getmsg(myUrl,res){
    var data = '';
    http.get(myUrl, function(request) {
        //监听myUrl地址的请求过程
        //设置编码格式
        request.setEncoding("utf8");
    
        //数据传输过程中会不断触发data信号
        request.on("data", function(response) {
            data += response;
        });
    
        //当数据传输结束触发end
        request.on("end", function() {
            //把data数据返回前端
            res.send(data);
        });
    }).on("error", function() {
        console.log("请求myUrl地址出错！");
    });
}
