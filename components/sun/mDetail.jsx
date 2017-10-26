import React from "react";
import $ from "jquery";
import {connect} from "react-redux";
import "./mDetail.scss";
class Mdetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	
	render(){
		return (
			<div id="warp">
				<div className="header">
					<b>&lt;</b>
					王牌特工2：黄金圈
				</div>
				<div className="nav">
					<div>
						<a href=""><img src="http://p1.meituan.net/177.249/movie/8032e4157e1fb1f6cdb52fcc37698c074599808.jpg" /></a>
					</div>
					<div>
						<h1>王牌特工2：黄金圈</h1>
						<p>Kingsman: The Golden Circle</p>
						<span>8.7</span>
						<p>8.4万<b>人评分</b></p>
						<p>动作,冒险</p>
						<p>英国,美国</p>
						<p>2017-10-20大陆上映</p>
					</div>
				</div>
				<div className="dt">
					<a href="">立即购票</a>
					<div>
						<p>本片讲述了艾格西（塔伦·埃格顿 饰）由前集中的特工“菜鸟”升级为特工老手，他与梅林（马克·斯特朗 饰）将前往美国，与王牌特工组织的美国政治家（哈莉·贝瑞 饰）一起并肩作战。而他们所面对的敌人则是美艳狠毒的大反派波比（朱丽安·摩尔 饰）。</p>
					</div>
				</div>
				<div className="person">
					<ul>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
						<li>
							<div><img src="//p1.meituan.net/movie/dd0be88ca9ebf162bfdbfa2087979633139912.jpg@130w_180h.webp" /></div>
							<p>马修·沃恩</p>
							<span>导演</span>
						</li>
					</ul>
				</div>
				<div className="all">
					全体演职人员
					<span>&gt;</span>
				</div>
				<div className="pai">
					<div>
						<span>1</span>
						<p>昨日票房排行</p>
					</div>
					<div>
						<span>13243</span>
						<p>首周票房(万)</p>
					</div>
					<div>
						<span>1</span>
						<p>累计票房(万)</p>
					</div>
					<b>&gt;</b>
				</div>
				<div className="pl">
					<div className="title">短评</div>
					<div className="xbody">
						<div className="sq">
							<p>4天前</p>
							<div className="content">看完第一部觉得不错，看见出第二部就赶紧买了首映的票，整体感觉还可以，谈不上惊艳，也许是第一部的光环还在，影响到第二部的精彩。（其实梅林很帅，为什么要死？为什么？他比其他人都帅啊啊，这就不科学了，我觉得吧，为什么梅林的戏那么少，多一点会好很多</div>
							<div className="xfoot">
								<div className="xleft">
									<img src=""/>
									<span>asdsad</span>
									<i>购</i>
								</div>
								<div className="xright">
									<span>3213</span>
									<span>{this.props.url}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div >
					<div className="title">相关电影</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		var self = this;
		$.ajax({
			url:"http://localhost:2345/ls",
			type:"GET",
			data:{
				url:self.props.url
			},
			success:function(data){
				var sss = JSON.parse(data);
				console.log(sss);
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
