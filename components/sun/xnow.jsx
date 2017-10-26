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
			var self = this;
			var result = arr1.map(function(item,idx){
				return <Link to="/x/m" key={idx}><li>
					<div className="box" onClick={self.send.bind(this,item.id)} data-id={item.id}>
						<div><img src={item.img}/></div>
						<div>
							<h1>{item.nm}</h1>
							<p>{item.cat}</p>
							<p>{item.star}</p>
							<span>{item.showInfo}</span>
						</div>
						<b>{item.sc}<i>分</i></b>
						<button>购票</button>
					</div>
				</li></Link>
			})
			return result;
		}
	}
	render(){
		return (
			<div className="wrap">
				<ul ref="ul">
					{this.jg(this.state.res)}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		var self = this;
		$.ajax({
			url:'http://localhost:2345/faa',
			type:'GET',
			data:{
				lm:self.state.lm
			},
			success:function(data){
				var res = JSON.parse(data);
				//console.log(res);
				self.setState({
					res:res.data.movies
				})
			}
		})
		window.onscroll=()=>{
			var scrollTop = window.scrollY;
			if(scrollTop>=document.body.scrollHeight-window.innerHeight-50){
				var self = this;
				$.ajax({
					url:'http://localhost:2345/faa',
					type:'GET',
					data:{
						lm:self.state.lm
					},
					success:function(data){
						var res = JSON.parse(data);
						console.log(res);
						self.setState({
							res:res.data.movies
						})
						/*function jg(arr){
							self.refs.ul.innerHTML = arr.map(function(item){
								return `
									<li>
										<a href="#">
											<div><img src="${item.img}"/></div>
											<div>
												<h1>${item.nm}</h1>
												<p>${item.cat}</p>
												<p>${item.star}</p>
												<span>${item.showInfo}</span>
											</div>
											<b>${item.sc}<i>分</i></b>
											<button>购票</button>
										</a>
									</li>
								`
							}).join('');
						}
						jg(self.state.res);*/
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