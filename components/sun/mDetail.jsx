import React from "react";
import $ from "jquery";
import {connect} from "react-redux";
import {Route, Link} from 'react-router-dom';
import "./mDetail.scss";
class Mdetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			ress:'',
			crm:[],
			arr3:[]
		}
		this.crmm = (rss)=>{
			console.log(rss);
			var rr = rss.map(function(item){
				return <div className="xbody">
							<div className="sq">
								<p>{item.time}</p>
								<div className="content">{item.content}</div>
								<div className="xfoot">
									<div className="xleft">
										<img src={item.avatarurl?item.avatarurl:'https://img.meituan.net/avatar/4c99d12f02c6946ee00b4a48b5226c468852.jpg'}/>
										<span>{item.nickName}</span>
										<i>购</i>
									</div>
									<div className="xright">
										<span>{item.approve}</span>
										<span>{item.reply}</span>
									</div>
								</div>
							</div>
						</div>
			})
			return rr;
		}
		this.pp = (arr1)=>{
			var tt = arr1.map(function(item){
				return <li>
							<div><img src="//p0.meituan.net/movie/33665c3a76855feb9ac065686c7c305639702.jpg@130w_180h.webp"/></div>
							<p>{item}</p>
							<span>演员</span>
						</li>
			})
			return tt;
		}
	}
	render(){
		return (
			<div id="warp">
				<div className="header">
					<Link to="/home/xnow"><b>&lt;</b></Link>
					{this.state.ress.nm}
				</div>
				<div className="nav">
					<div>
						<a href="http://localhost:12345/#/choseSeat"><img src={this.state.ress.img} /></a>
					</div>
					<div>
						<h1>{this.state.ress.nm}</h1>
						<p>{this.state.ress.ver}</p>
						<span>{this.state.ress.sc}</span>
						<p>{this.state.ress.snum}<b>万人评分</b></p>
						<p>{this.state.ress.cat}</p>
						<p>{this.state.ress.src}</p>
						<p>{this.state.ress.rt}</p>
					</div>
				</div>
				<div className="dt">
					<Link to="/choseSeat">立即购票</Link>
					<div ref="p">
					</div>
				</div>
				<div className="person">
					<ul>
						{this.pp(this.state.arr3)}
					</ul>
				</div>
				<div className="all">
					全体演职人员
					<span>&gt;</span>
				</div>
				<div className="pai">
					<div>
						<span>{this.state.ress.vnum}</span>
						<p>昨日票房排行</p>
					</div>
					<div>
						<span>{this.state.ress.pn}</span>
						<p>首周票房(万)</p>
					</div>
					<div>
						<span>{this.state.ress.dur}</span>
						<p>累计票房(万)</p>
					</div>
					<b>&gt;</b>
				</div>
				<div className="pl">
					<div className="title">短评</div>
					{this.crmm(this.state.crm)}
				</div>
				<div className="xfooter">
					<span>登录</span>
					<span>注册</span>
					<p>友情链接:<a>猫眼专业版</a><a>美团网</a></p>
					<p>© 猫眼电影 客服电话: </p>
					<p>京ICP备16022489号-1 京公网安备11010502030881号</p>
					<p>北京猫眼文化传媒有限公司</p>
				</div>
			</div>
		)
	}
	componentDidMount(){
		var self = this;
		var para = 'http://m.maoyan.com/movie/'+self.props.url+'.json'
		$.ajax({
			url:"http://localhost:23456/cina",
			type:"GET",
			data:{
				para:para
			},
			success:function(data){
				var datas = JSON.parse(data);
				console.log(datas);
				var res = datas.data.MovieDetailModel;
				var ress = datas.data.CommentResponseModel
				self.setState(Object.assign({},self.state,{
			        ress:res,
					crm:ress.cmts,
					arr3:res.star.split(' ').slice(0,20)
			    }))
				self.refs.p.innerHTML = self.state.ress.dra;
			}
		})
	}
}
export default connect((state) => {
	//console.log(state)
	
	return state
}, (dispatch) => {
	return {
	    
	}
})(Mdetail);
