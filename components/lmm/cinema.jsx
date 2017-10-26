import React from "react"
import {connect} from "react-redux";
import {Route, Link} from 'react-router-dom'
import  "../../css/cinema.css"
class Xcinema extends React.Component{
        constructor(props){
            super(props)
            this.state={
                name:"Xcinema",
                arrParse:{}
            }
            this.listInit=()=>{
                var resarr=[];
                // console.log(this.state.arrParse)
                for(var key in this.state.arrParse){
                    
                    resarr.push(<ul key={key}>
                        {this.lists(key)}
                    </ul>)  
                }
                return resarr;
            }
            this.lists=(key)=>{
                // console.log(this.state.arrParse[key])
                var arrlist =this.state.arrParse[key];
                var reslists;
                reslists =arrlist.map(function(item,idx){
                    return <a href={'#/cinemaDetail/'+item.id} key={idx} data-bid="b_I9gwq" data-lab="{index: 1, cinema_id: 1645 }">
                              <li className="cinema-container">
                                <div className="cinema-name text-ellipsis">{item.nm}</div>
                                <div className="price theme-color">
                                  <span className="num">{item.sellPrice}</span>
                                  <span>元起</span>
                                </div>
                                <div>
                                  <p className="address text-ellipsis">{item.addr}</p>
                                </div>
                                  <div className="dis">2.8km</div>
                                <div className="tag-list">
                                    <div>座</div>
                                    <div>巨幕厅</div>
                                </div>
                              </li>
                            </a>
                })
                return reslists;
            }

        }
        componentDidMount(){
            var self = this;
            var para = "http://m.maoyan.com/cinemas.json";
          $.ajax({
            url:'http://localhost:23456/cina',
            type:'get',
            data:{para:para},
            success:function(response){
              response = JSON.parse(response);
              console.log(response)
              var arrParse = response.data;
              // console.log(arrParse);
              self.setState({
                arrParse:Object.assign({},arrParse)
              })
            },
            error:function(){
              console.log('ERROR')
            }
          });
        }
        render(){
            return <div id="tab_cinema" className="tab_hide" >{this.listInit()}</div>
            
        }
}

export default Xcinema 