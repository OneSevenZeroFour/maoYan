// react redux react-router webpack sass es6 jsx axios
import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js";
import {Provider} from "react-redux";
import Xnow from "./components/sun/xnow.jsx";
import Mdetail from "./components/sun/mDetail.jsx";
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
ReactDOM.render(<Router>
  <Provider store={store}>
    <div>
    	<Route exact path="/x" component={Xnow}></Route>
    	<Route path="/x/m" component={Mdetail}></Route>
    </div>
  </Provider></Router>,document.getElementById("demo")
  )
