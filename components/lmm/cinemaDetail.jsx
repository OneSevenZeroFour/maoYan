import React from "react"
import {connect} from "react-redux";
import {Route, Link} from 'react-router-dom'
import  "../../css/cinemaDetail1.css"
let ulSty ={
  width: 1791,
  paddingLeft: 276,
  paddingRight: 276,
  position: "absolute",
  top: 0,
  left: 0
};
 
class XcinemaDetail extends React.Component{
        constructor(props){
            super(props)
            this.state={
                name:"XcinemaDetail",
                cinemaDetailModel:{},
                DateShow:{},
                Dates:[],
                movies:{},
                idx: 0,
                day:0,
                slug:"",
                id:null
            }
            this.listInit=()=>{
               var res_header = [];
               res_header.push(<div> 
                    <header className="navbar">
                      <div className="nav-wrap-left">
                              <a className="react back" href="http://localhost:12345/#/home/cinema">返回</a>
                      </div>
                      <h1 className="nav-header">{this.state.cinemaDetailModel.nm}</h1>
                      <div className="nav-wrap-right">
                            <a>
                                <span>
                                    <i></i>
                                </span>
                            </a>
                        </div>
                    </header> 
                    <div className="body-wrapper" id="bodyWrapper">
                          <div id="showtime" className="imeituan-movie">
                              <div className="showtime-cinema-info">  
                                    <div className="stci-info">    
                                      <div className="cinema-name">{this.state.cinemaDetailModel.nm}</div>  
                                      <p>{this.state.cinemaDetailModel.addr}</p>  
                                    </div>
                                    <div className="stci-tel">
                                      <a href="tel:020-37225388" data-tel="020-37225388" data-bid="b_Rf9fh" data-lab="{ cinema_id:1643 }">{this.state.cinemaDetailModel.tel}
                                        <i className="phone-icon"></i>
                                      </a>
                                    </div>
                              </div>
                              <div className="showtime-movies" touchmove="return false">
                                  <ul className="lazy cf" style={ulSty} id="movielist">
                                        {this.movieList()}
                                  </ul>
                              </div>
                              <div className="showtime-mname">
                                  {this.content()}
                              </div>
                              <ul className="time-line">
                                    {this.showTime()} 
                                 
                              </ul>
                              <div className="showtime-list">
                                  <table> 
                                      <tbody>
                                          {this.showList()}
                                      </tbody>
                                  </table>
                              </div>
                          </div>

                    </div>
                    <footer className="footer">
                      <div className="footer-links">友情链接：<a className="theme-color" href="//m.maoyan.com">猫眼电影</a></div>
                      <div className="footer-line footer-copyright">
                          <div className="hr"></div>
                          <span className="footer-copyright-text">©2017 美团网 <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a></span>
                      </div>
                    </footer>
                </div>);
               return res_header;    
            },
            this.movieList=()=>{
                var res_movie =[];
                 for(var i in this.state.movies){
                      res_movie.push(<li>
                                <a key={i} className={`ma-dis${this.state.idx==i?" selected":""}`} onClick={this.changeMovie.bind(this,i,this.state.movies[i].id)} data-index="1" href="javascript:;" data-cid="c_E324T" data-eventbid="b_CuyQs" key={i} data-lab="{ index:1, movie_id:341173 }">
                                    <img alt={this.state.movies[i].nm} src={this.state.movies[i].img}/> 
                                </a> 
                          </li>) 
                           
                }
                return res_movie;
            },
            this.content=()=>{
              var idx = this.state.idx;
              // console.log(idx)
              var res_content =[];
              for(var j in this.state.movies){
                 if(j==idx){
                    res_content.push(<a className="movie-relative" href="javascript:;">
                        <span className="movie-name">{this.state.movies[j].nm}</span>
                        <span className="sc">{this.state.movies[j].sc!=0? this.state.movies[j].sc+"分":"暂无评分"}</span>
                    </a>);
                 }
              }
              return res_content;
            },
            this.changeMovie=(ss,id)=>{
              var id =id;
              var sy =ss;
              this.setState({
                idx:ss,
                id:id
              })
              var left = sy*(-198)+"px";
              $("#movielist").css("left",left);
              console.log(id)
              var paras = "http://m.maoyan.com/showtime/wrap.json?cinemaid="+this.state.cid+"&movieid="+id;
              var self=this;
              $.ajax({
                url:'http://localhost:23456/cina',
                type:'get',
                data:{para:paras},
                success:function(res){
                  console.log(JSON.parse(res));
                   var res =JSON.parse(res).data;
                   var DateShow =res.DateShow;
                   var Dates =res.Dates;
                   self.setState({
                     DateShow:DateShow,
                     Dates:Dates
                   })
                }
              })
            },
            this.changeDay=(day,item)=>{
              this.setState({
                day:day,
                slug:item.slug
              })
            },
            this.showTime=()=>{
              // console.log(this.state.Dates)
              // console.log($.type(this.state.Dates))
              var self = this;
              var res_showtime=this.state.Dates.map(function(item,idx){
                return  <li onClick={self.changeDay.bind(this,idx,item)} className={`showday${self.state.day==idx?" active":""}`} key={idx}>
                    <a href="javascript:;" >{item.text}</a>
                </li>
              })
              return res_showtime;
            },
            this.showList=()=>{
              var slug = this.state.slug;
              var hahh=this.state.DateShow;
              // var yyname =this.state.cinemaDetailModel.nm;
              // var yp =this.state.idx;
              // var dyname = this.state.movies[yp].nm;
              // console.log(yyname);
              // console.log(slug);
              // console.log(dyname);
              // var strUrl ="?time=" + slug;
              // console.log(slug)
              for(var k in hahh){
                 if(k==slug){
                  // console.log(666)
                   var res_showlist = hahh[k].map(function(ite,idx){
                      return  <tr key={idx}>
                          <td className="stl-time ">
                              <div className="stl-time-wrap">
                                  <strong>{ite.tm}</strong>
                                  <em>{ite.end}结束</em>
                              </div>
                          </td>
                          <td className="stl-info">
                              <div className="stl-ver">{ite.lang} {ite.tp}</div>
                              <div className="two-line">{ite.th}</div>
                          </td>
                          <td className="stl-price">
                              <span className="unit theme-color">
                                  <span className="stonefont">39</span>元
                              </span>
                              <span className="origin-price">折扣卡首单特惠</span>
                          </td>
                          <td className="stl-buy">
                              <a className="stl-btn" href="http://localhost:12345/#/choseSeat">选座购票</a>
                          </td>
                      </tr>
                   })
                  return res_showlist;
                 }
              }
              return res_showlist;
            }
        }
        componentWillMount(){
            var self = this;
            var cid =location.hash.split('/')[2];
            var para = "http://m.maoyan.com/showtime/wrap.json?cinemaid="+cid+"&movieid=";
          $.ajax({
            url:'http://localhost:23456/cina',
            type:'get',
            data:{para:para},
            success:function(response){
              var response =JSON.parse(response).data;
              var cinemaDetailModel =response.cinemaDetailModel;
              var DateShow =response.DateShow;
              var Dates =response.Dates;
              var  movies =response.movies;
              var now = new Date();
              var str =  now.getFullYear() + '-' + (now.getMonth()+1) +'-' + now.getDate();
              var id=response.currentMovie.id;
              self.setState({
                cinemaDetailModel:cinemaDetailModel,
                DateShow:DateShow,
                Dates:Dates,
                movies:movies,
                slug:str,
                id:id,
                cid:cid
              })
             console.log(response);
            }
          });
        }
        render(){
            return <div> {this.listInit()}
            </div> 
        }
}

export default XcinemaDetail 