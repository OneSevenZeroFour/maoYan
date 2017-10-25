import React from "react";
import {browserHistory} from 'react-router';
import "./myHeader.css"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

class myHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultId:1,
      tab:[{
        id:1,
        val:'影片',
        path:'/movie'
      },{
        id:2,
        val:'影院',
        path:'/cinema'
      }],
      local:null
    }
    this.tog = (id)=>{
      this.state.defaultId = id;
    }
    this.getRouter = ()=>{
      if(window.location.hash == '#/cinema'){
        this.state.defaultId=2;
      }
    }
    this.loc = ()=>{
      var self = this;
      var geolocation = new BMap.Geolocation();
      if(!geolocation){console.log("获取不到");return;}
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          var lat = r.point.lat;
          var lgt = r.point.lng;
          var point_ = new BMap.Point(lgt,lat);
          alert('您的位置：'+r.point.lng+','+r.point.lat);
          var geoc = new BMap.Geocoder();
          geoc.getLocation(point_, function(rs){
              self.setState(Object({},self.state,{
                local:rs.address
              }))
           })

        }
      })
    }
  }
  componentWillMount() {console.log(window.location.hash == '#/cinema')
    this.getRouter();
    // this.loc()
  }
  render() {
    return (<div>
      <header className="navbar">
        <div className="nav-wrap-left">
          <a className="change-city">{this.state.local || "定位中..."}</a>
        </div>
        <h1 className="nav-header">猫眼电影</h1>
        <div className="nav-wrap-right">
          <a>
            <span>
              <i></i>
            </span>
          </a>
        </div>
      </header>
      <ul className="taba taban noslide">
        {
          this.state.tab.map((item,idx)=>{
            return  <li className={item.id==this.state.defaultId ? "active":''} onClick={()=>{this.tog(item.id)}} key={item.id}>
                      <Link to={item.path}><span className="react">{item.val}</span></Link>
                    </li>
          })
        }

        <div ref="slide" className={this.state.defaultId == 1 ? "slide":"slide1"}></div>
      </ul>
    </div>)
  }
}
export default myHeader;
