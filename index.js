// react redux react-router webpack sass es6 jsx axios
import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js"
import { Provider } from "react-redux"
import { HashRouter as Router , Route , Link ,Redirect} from "react-router-dom"

import Xlogin from './components/wwj/login.jsx'

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<div>
				<Route  path="/login" component = {Xlogin}></Route>
			</div>
		</Provider>
	</Router>,document.getElementById("demo")
  )
