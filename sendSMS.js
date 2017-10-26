var express = require("express");
var bodyParser = require('body-parser');
var url = require('url');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



//短信发送程序

const SMSClient = require('@alicloud/sms-sdk');
const accessKeyId = 'LTAI7y5c51oObSKu';
const secretAccessKey = '9aMWPkeLmIRoi7XsPB6rKgttZZsJmb';
//初始化sms_client 
let smsClient = new SMSClient({accessKeyId, secretAccessKey});


app.post("/getSMSmsg", function(req, result){

    //生成5位随机验证码
    var ramdomCode  =  parseInt(Math.random()*100000);
    while(ramdomCode<10000){
        ramdomCode = ramdomCode + '0';
    };

    var phoneNumber = req.body.num;
    console.log(phoneNumber)
    console.log(ramdomCode)

    var code = {"code":ramdomCode,"product":"云通信"};
    code = JSON.stringify(code);
    //发送短信 
    smsClient.sendSMS({
        PhoneNumbers: phoneNumber,
        SignName: 'react个人电影网',
        TemplateCode: 'SMS_105805004',
        TemplateParam: code
    }).then(function (res) {
        let {Code}=res
        if (Code === 'OK') {
            //处理返回参数 
            console.log('res:',res)
            var info = [];
            result.send(JSON.stringify({
                smsData:res,
                randomSMSCode:ramdomCode
            }))
            
        }
    }, function (err) {
        console.log(err)
        result.send(JSON.stringify({
            SMSerr:'YES'
        }))
    })
    result.setHeader('Access-Control-Allow-Origin','*');
});





 
// //查询短信发送详情 
// smsClient.queryDetail({
//     PhoneNumber: '1500000000',
//     SendDate: '20171025',
//     PageSize: '10',
//     CurrentPage: "1"
// }).then(function (res) {
//     let {Code, SmsSendDetailDTOs}=res
//     if (Code === 'OK') {
//         //处理发送详情内容 
//         console.log(SmsSendDetailDTOs)
//     }
// }, function (err) {
//     //处理错误 
//     console.log(err)
// })
 

app.listen(12346);
console.log("SMS Server start")
