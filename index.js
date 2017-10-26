// react redux react-router webpack sass es6 jsx axios

import ReactDOM from "react-dom";
import store from "./store.js";
import {Provider} from "react-redux";

import Mdetail from "./components/sun/mDetail.jsx";

import React from "react";

import { HashRouter as Router , Route , Link ,Redirect} from "react-router-dom"

import Xlogin from './components/wwj/login.jsx'

import $ from "jquery"
window.$ = $;
import "./css/base.css"
import Home from "./components/lantao/home.jsx"
import ChoseSeat from "./components/lantao/choseSeat.jsx"

import XcinemaDetail from "./components/lmm/cinemaDetail.jsx"

ReactDOM.render(<Router>
  <Provider store={store}>
    <div>
    	<Route path="/x/m" component={Mdetail}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/cinemaDetail/:id" component={XcinemaDetail}></Route> 
      <Route path="/choseSeat" component={ChoseSeat}></Route> 
      <Route  path="/login" component = {Xlogin}></Route>
    </div>
  </Provider></Router>,document.getElementById("demo")
  )
