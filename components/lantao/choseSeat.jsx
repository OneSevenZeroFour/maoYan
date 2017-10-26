import React from "react"
import "./choseSeat.css"
class ChoseSeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seatData:[
                [-1, 0, 0,0,0,0, 0, 0,0, 0, 0, 0,0,-1,-1, 0,0, 0, 0, 0,0,-1,-1,-1,-1],
                [-1,-1, 0,0,0,0, 0, 0,0, 0,-1,-1,0, 0, 0, 0,0, 0, 0, 0,0,-1,-1,-1,-1],
                [-1,-1,-1,0,0,0,-1,-1,0, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0,0, 0, 0,-1,-1],
                [ 0, 0, 0,0,0,0, 0, 0,0, 1, 1, 1,1, 0, 0, 0,0, 0, 0, 0,0, 0, 0,-1,-1],
                [ 0, 0, 0,0,0,0,-1,-1,1, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0,0, 0, 0,-1,-1],
                [ 0, 0, 0,0,0,0,-1,-1,1, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0,0, 0, 0,-1,-1],
                [ 0, 0, 0,0,0,0,-1,-1,1, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0,0, 0, 0,-1,-1],
                [ 0, 0, 0,0,0,0,-1,-1,1, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0,0,-1,-1,-1,-1],
                [-1, 0, 0,0,0,0,-1,-1,1, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0,0,-1,-1,-1,-1],
                [-1, 0, 0,0,0,0,-1,-1,1, 0, 0, 0,0, 0,-1, 0,0, 0, 0, 0,0,-1,-1,-1,-1]
              ],
      i:0,
      order:[],
      intro:false,
      tog:false,
      tog2:true,
      total:0
    }
    this.count = ()=>{
      let o = this.state.order;
      for(let i=0; i<o.length;i++){
        let val = o[i].split('列');
        let row = parseInt(val[0])-1;
        let col = val[0].slice(-2)*1;
        this.state.seatData[row][col] = 1;
        console.log(row,col)
      }
      this.setState(Object.assign({},this.state,{
        intro : false,
        order : [],
        i : 0,
        tog2 : true
      }))
    }
    this.tog2 =()=>{
      this.setState(Object.assign({},this.state,{
        tog2 : false
      }))
    }
    this.ti = ()=>{
      this.setState(Object.assign({},this.state,{
        tog:false
      }))
    }
    this.pickup = (e)=>{
      var pu = e.target;
      let o = this.state.order;
      if(pu.tagName === "IMG"){
        var rowCol = (pu.dataset.row*1+1) + '排' + pu.dataset.col + '列';
        var num = pu.src.split('.')[0].slice(-1)*1;
        if(num === 1){
          return
        }else if(num === 3){
          pu.src="./img/2.png";
          this.state.i-=1;
          for(let i=0; i<o.length; i++){
            if(o[i] === rowCol ){
              o.splice(i,1);
              this.setState(Object.assign({},this.state,{
                order : o
              }))
            }
          }
          this.state.total = this.state.i*28;
          if(this.state.i <=0){
            this.setState(Object.assign({},this.state,{
              intro : false
            }))
          }
          console.log(rowCol,this.state.i);
        }else if(this.state.i >= 5){
          this.setState(Object.assign({},this.state,{
            tog : true
          }))
          return;
        }else if(num === 2 ){
          pu.src="./img/3.png";
          this.state.i+=1;
          this.state.order.push(rowCol)
          this.setState(Object.assign({},this.state,{
            intro : true,
            order : this.state.order,
            total : this.state.i*28
          }))
        }
      }
    }
    this.seats = () =>{
      var $side = $(this.refs.side);
      var height = parseInt($side.css('height'));
      $(this.refs.main).css('height',height+40)
    }
  }
  render() {
    return (<div id="seats">
                <div className="movie cf">
                <button className="btn btn-pay btn-disabled J_SubmitBtn background-color" onClick={this.tog2}>提交订单</button>
                <div className="info">
                  <h3>王牌特工2：黄金圈</h3>
                  <p>今天10月23日 14:40</p>
                </div>
                </div>
                <div className="tips cf" id="seatType">
                  <ul className="seat-intro" style={{display:this.state.intro?"none":"block"}}>
                    <li><span className="seat" style={{backgroundImage: `url(./img/2.png)`}}></span>可选</li>
                    <li><span className="seat" style={{backgroundImage: `url(./img/3.png)`}}></span>已选</li>
                    <li><span className="seat" style={{backgroundImage: `url(./img/1.png)`}}></span>已售</li>
                    <li><span className="seat" style={{backgroundImage: `url(./img/4.png)`}}></span>情侣座</li>
                  </ul>
                  <div className="seat-list" style={{display:this.state.intro?"block":"none"}}>
                    <ul className="ul-list">
                      <em className="theme-color">{this.state.total}</em>
                      {
                        this.state.order.map(function(item,idx){
                          return <li className="rm" key={idx} style={{'background':'url(./img/6.png) no-repeat'}}>{item}</li>
                        })
                      }
                    </ul>
                  </div>
                </div>
                <div className="main main-small" ref="main">
                <h3>7号厅DTS</h3>
                <div className="wrapper">
                  <div className="scroller" ref="scr" onClick={this.pickup}>
                    <div className="item"style={{background: `url(./img/5.png) center top repeat-y`}}>
                      <div className="c-tips"><span>银幕中央</span></div>
                      <div ref="seat">
                      {this.state.seatData.map(function(item,row){
                        var str = item.map(function(it,col){
                          switch (it) {
                            case -1:
                                return <span key={row+col} className="seat"></span>
                                break;
                            case 1:
                                return <img key={row+col} src="./img/1.png" className="seat  disabled" data-row={row} data-col={col} />
                                break;
                            case 0:
                                return <img key={row+col} src="./img/2.png" className="seat" data-row={row} data-col={col} />
                                break;
                            default:
                          }
                        })
                        return <p key={row}>{str}</p>
                      })}
                      <p className="c-tips"></p>
                      </div>
                    </div>
                  </div>
                  <div className="side">
                    <ol ref="side">
                      <li className="cs"></li>
                      {this.state.seatData.map(function(item,row){
                        return <li key={row}>{row+1}</li>
                      })}
                      <li className="cs"></li>
                    </ol>
                  </div>
                </div>
            </div>
            <div className="tog" style={{display:this.state.tog?"block":"none"}}>
              <div className="msg-bg"></div>
              <div id="msg" className="msg-doc msg-alert">
              <div className="msg-bd">一次最多选择5个座位</div>
                <div className="msg-ft cf">
                  <span className="msg-btn msg-btn-ok" onClick={this.ti}>确定</span>
                </div>
              </div>
            </div>
            <div className="tog" style={{display:this.state.tog2?"none":"block"}}>
              <div className="msg-bg"></div>
              <div id="msg" className="msg-doc msg-alert">
              <div className="msg-bd">确认支付？</div>
                <div className="msg-ft cf">
                  <span className="msg-btn msg-btn-ok" onClick={this.count}>确定</span>
                </div>
              </div>
            </div>
          </div>)
  }
  componentDidMount(){
    this.seats();
    var scr = this.refs.scr;
    scr.addEventListener("touchstart",function(e){
      var ox = e.touches[0].clientX - scr.offsetLeft;
      document.addEventListener("touchmove",(evt)=>{
        scr.style.left = evt.touches[0].clientX - ox +  'px';
        evt.preventDefault();
      })
      document.addEventListener("touchend",(evt)=>{
        document.addEventListener("touchmove",null);
      })
    })
  }
}
export default ChoseSeat
