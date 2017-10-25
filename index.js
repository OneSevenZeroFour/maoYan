// react redux react-router webpack sass es6 jsx axios

import ReactDOM from "react-dom";
import React from "react";
import store from "./store.js"
import {Provider} from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import $ from "jquery"
window.$ = $;
import "./css/base.css"
import MyHeader from "./components/lantao/myHeader.jsx"
import Movie from "./components/lantao/movie.jsx"
import Cinema from "./components/lantao/cinema.jsx"
import ChoseSeat from "./components/lantao/choseSeat.jsx"



// <Route path="/choseSeat" component={ChoseSeat}></Route>
// <MyHeader />
// <Route exact path="/" component={Movie}></Route>
// <Route path="/movie" component={Movie}></Route>
// <Route path="/cinema" component={Cinema}></Route>
ReactDOM.render(<Router>
  <Provider store={store}>
    <div>
    <MyHeader />
    <Route exact path="/" component={Movie}></Route>
    <Route path="/movie" component={Movie}></Route>
    <Route path="/cinema" component={Cinema}></Route>
    </div>
  </Provider></Router>,document.getElementById("demo")
  )
