import React from "react";

class ChildMTaccountLogin extends React.Component{
    constructor(props){
        super(props);

        this.login = ()=>{
            var _username = document.querySelector('#username').value;
            var _password = document.querySelector('#password').value;
            // var errTips = document.querySelector('#tips');

            if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(_username))){
                this.refs.wrongDiv.style.display = 'block';
                return false;
            }else if(!/^\S{6,20}$/.test(_password)){
                return false;
            }else{
                this.refs.wrongDiv.style.display = 'none';
            }
        }
}
        render(){
        	return(
        		<div id="normal-login-form">
                    <div id="tips" ref="wrongDiv">
                        <span>账号或密码错误，是否<a href="##">找回密码?</a></span>
                    </div>
                    <ul>
                        <li>
                            <input id="username" className="input-weak" type="text" placeholder="账户名/手机号/Email" />
                        </li>
                        <li>
                            <input id="password" className="input-weak" type="password" placeholder="请输入您的密码" />
                        </li>
                    </ul>
                    <div className="btn-wrapper">
                        <button type="submit" onClick={this.login} className="btn btn-larger">登&nbsp;&nbsp;陆</button>
                    </div>
                </div>
        	)
        }
    
}
export default ChildMTaccountLogin;