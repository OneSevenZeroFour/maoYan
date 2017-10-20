// react redux react-router webpack sass es6 jsx axios
import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js"
import {Provider} from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
ReactDOM.render(<Router>
  <Provider store={store}>
    <div>
    </div>
  </Provider></Router>,document.getElementById("demo")
  )
