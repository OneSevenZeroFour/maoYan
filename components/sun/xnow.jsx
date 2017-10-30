import React from "react";
import $ from "jquery";
import {connect} from "react-redux";
import {Route, Link} from 'react-router-dom';
import "./xnow.scss";
class Xnow extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			res:[],
			lm:10
		}
		this.send = (idx)=>{
			this.props.ok(idx);
		}
		this.jg = (arr1)=>{
			console.log(arr1);
			var self = this;
			var result = arr1.map(function(item,idx){
				return <Link to="/x/m" key={idx} style={{display:'block'}}><li className="lis">
					<div className="box" onClick={self.send.bind(this,item.id)} data-id={item.id}>
						<div className="divv"><img className="imgg" src={item.img}/></div>
						<div className="divv">
							<h1 className="h11">{item.nm}</h1>
							<p className="pp">{item.cat}</p>
							<p className="pp">{item.star}</p>
							<span className="spann">{item.showInfo}</span>
						</div>
						<b className="bb">{item.sc}<i>分</i></b>
						<Link to="/choseSeat"><button className="btn">购票</button></Link>
					</div>
				</li></Link>
			})
			return result;
		}
	}
	render(){
		return (
			<div className="wrap">
				<ul ref="ul" className="lists">
					{this.jg(this.state.res)}
				</ul>
				<div id="name">
					我的
				</div>
			</div>
		)
	}
	componentDidMount(){
		var self = this;
		var para = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=99';
		$.ajax({
			url:'http://localhost:23456/cina',
			type:'GET',
			data:{
				para:para
			},
			success:function(res){
				var datas = JSON.parse(res).data;
				self.setState(Object.assign({},self.state,{
			        res:datas.movies.slice(0,self.state.lm),
			        lm:self.state.lm+10
			    }))
			}
		})
			window.onscroll=()=>{
			var scrollTop = window.scrollY;
			if(scrollTop>=document.body.scrollHeight-window.innerHeight-50 && window.location.hash === '#/home/movie'){
				var self = this;
				var para = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=99';
				$.ajax({
					url:'http://localhost:23456/cina',
					type:'GET',
					data:{
						para:para
					},
					success:function(r){
						var ress = JSON.parse(r).data;
						self.setState(Object.assign({},self.state,{
					        res:ress.movies.slice(0,self.state.lm),
			        		lm:self.state.lm+10
					    }))
					}
				})
			}
		}
		
	}
}
export default connect((state) => {
	//console.log(state)
	return state
}, (dispatch) => {
	return {
	    ok(idx) {
	 		dispatch({type: "SETURL", url:idx});
	    }
	}
})(Xnow);