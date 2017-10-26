import React from "react";

class ChildPhoneLogin extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			SMSCode:'',
			ERRstate:false
		}

		this.regPhoneNum = ()=>{

			var _phoneNumber = document.querySelector('#phonenumber').value;

			if(_phoneNumber.length == 11){
				this.refs.sms.disabled = ''	
			}else{
				this.refs.sms.disabled = 'disabled';
			};
        }

        /*点击发送验证码按钮*/
        this.sendSmsCode = ()=>{

        	var _phoneNumber = document.querySelector('#phonenumber').value;

        	if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(_phoneNumber))){
                this.refs.msgContent.innerText = '请输入正确的手机号码';
        		this.refs.msgBg.style.display = 'block';
        		this.refs.msgBox.style.display = 'block';
                this.refs.phonenum.value = '';
                return false;
            }else{

            	var self = this;

            	this.refs.inputSMSCode.disabled = '';
	            /*发送号码到后端*/
	    		$.ajax({
	    			type:'post',
	    			data:{num:_phoneNumber},
		            url:'http://localhost:12346/getSMSmsg',
		            success:function(data){
		            	var datas = JSON.parse(data);
		            	console.log(datas.SMSerr)
		            	if(datas.SMSerr === 'YES'){
		            		self.refs.msgContent.innerText = '操作过于频繁，请60秒后重试';
			    			self.refs.msgBg.style.display = 'block';
			    			self.refs.msgBox.style.display = 'block';
			    			return;
		            	}
		                var smsStatus = datas.smsData.Message;
		                self.setState({
		                	SMSCode:datas.randomSMSCode,
		                	ERRstate:true
		                })
		                console.log('下发到用户手机的验证码：',datas.randomSMSCode)
		                console.log('发送状态：',smsStatus)
		            }
	    		});

	        	var countDown = 60;
	        	var cdTimer = setInterval(()=>{
	        		countDown--;
	        		if(countDown == 0){
	        			clearInterval(cdTimer);
	        			this.refs.sms.innerText = '重新发送验证码';
	        			this.refs.sms.disabled = '';
	        			return;
	        		}
	        		this.refs.sms.innerText = countDown + '秒';
	        	},1000)
	        	this.refs.sms.disabled = 'disabled';
            }
        }

        this.loginBtn = ()=>{
        	console.log(this.state.SMSCode)

        	var _smsCode = this.refs.inputSMSCode.value;

        	if(_smsCode == this.state.SMSCode && _smsCode.length == 5){

        		setTimeout(()=>{
	        		this.refs.msgContent.innerText = '登陆成功';
	        		this.refs.msgBg.style.display = 'block';
	        		this.refs.msgBox.style.display = 'block';
	        		console.log('登陆成功')
        		},1500)
        		
        	}else{
        		this.refs.wrongMsg.style.display = 'block';
        	}
        	
        }

        this.comfrimBtn = ()=>{
        	this.refs.msgBg.style.display = 'none';
        	this.refs.msgBox.style.display = 'none';
        }
	}
	render(){
		return(
			<div id="quick-login-form">
				<div id="tips" ref="wrongMsg">
                    <span>验证码输入错误</span>
                </div>
                <ul>
                    <li className="kv-v">
                        <input id="phonenumber" ref="phonenum" className="input-weak kv-k" onChange={this.regPhoneNum} type="text" placeholder="请输入手机号" />
                        <button id="sendSms" ref="sms" type="button" className="btn1 btn-weak1"  onClick={this.sendSmsCode}>发送验证码</button>
                    </li>
                    <li>
                        <input id="smscode" disabled ref="inputSMSCode" className="input-weak" type="text" placeholder="请输入短信验证码" />
                    </li>

                </ul>
                <div className="btn-wrapper">
                    <button type="submit" onClick={this.loginBtn} className="btn btn-larger">登&nbsp;&nbsp;陆</button>
                </div>
                <div className="msgbackground" ref="msgBg"></div>
                <div id="msg" ref="msgBox" className="msg-doc">
                	<div className="msg-bd" ref="msgContent">操作过于频繁，请60秒后重试</div>
                	<div className="msg-ft cf">
                		<span className="msg-btn msg-btn-ok" ref="msgBtn" onClick={this.comfrimBtn}>确定</span>
                	</div>
                </div>
            </div>
		)
	}
	/*挂载*/
	componentDidMount() {
		this.regPhoneNum();
	}
}

export default ChildPhoneLogin;