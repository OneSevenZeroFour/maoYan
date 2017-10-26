import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Redirect} from 'react-router-dom'
import "./login.css";
import "./font_lefticon/iconfont.css";
import ChildPhoneLogin from './ChildPhoneLogin.jsx';
import ChildMTaccountLogin from './ChildMTaccountLogin.jsx';
import jquery from 'jquery';
window.$ = jquery;


class login extends React.Component{
    constructor(props){
        super(props);

        //tab标签切换到手机验证登陆
        this.phoneLoginTab = ()=>{
            var slide = document.querySelector('.slide');
            let li = document.getElementsByClassName('taba');
            
            let speed = 0;
            let timer = setInterval(()=>{
                speed +=55;
                let left = slide.offsetLeft;
                if(left<=375){
                    clearInterval(timer);
                    left = 375;
                }
                slide.style.left = left + 'px';
            },30)

            if(this.refs.MTlogin.className){
                this.refs.MTlogin.className = '';
                this.refs.PhoneLogin.className = 'active';
            }
        };

        this.meituanLoginTab = ()=>{
            var slide = document.querySelector('.slide');
            let speed = 0;
            let timer = setInterval(()=>{
                speed -=55;
                let left = slide.offsetLeft;
                if(left>=20){
                    clearInterval(timer);
                    left = 20;
                }
                slide.style.left = left + 'px';
            },30)

            if(this.refs.PhoneLogin.className){
                this.refs.PhoneLogin.className = '';
                this.refs.MTlogin.className = 'active';
            }
        };
        
    };
    render(){
        return(
            <div className="main">
                <header className="navbar">
                   <div className="nav-wrap-left">
                        <a className="react back" href="javascript:history.back()">
                            <i className="iconfont icon-zuo">
                            </i>
                        </a>
                   </div>
                   <h1 className="nav-header">猫眼电影</h1>
                </header>
                
                <div id="login">
                    <dl className="list">
                        <dd className="nav">
                            <ul className="taba">
                                <li onClick={this.meituanLoginTab} ref="MTlogin" className="active"><a className="react" href="#/login/MTlogin">美团账号登录</a></li>
                                <li onClick={this.phoneLoginTab} ref="PhoneLogin" ><a className="react" href="#/login/phoneLogin">手机验证登录</a></li>
                                <div className="slide"></div>
                            </ul>
                        </dd>
                    </dl>
                    <Redirect from="/login" to="/login/MTlogin" />
                    <Route path="/login/MTlogin" component={ChildMTaccountLogin}></Route>
                    <Route path="/login/phoneLogin" component={ChildPhoneLogin}></Route>
                    
                    <ul className="subline">
                        <li><a href="##">立即注册</a></li>
                        <li className="right"><a href="##">找回密码</a></li>
                    </ul>
                    <footer>
                        <div className="copyright"><span className="copyright">© 猫眼电影 客服电话：<a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a></span></div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default login;