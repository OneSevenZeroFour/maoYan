import React from "react";
import {HashRouter as Router, Route, Link, Redirect,} from 'react-router-dom'
// import {ConnectedRouter, routerMiddleware } from 'react-router-redux';
import MyHeader from "./myHeader.jsx"
import Movie from "./movie.jsx"
import Xcinema from "../lmm/cinema.jsx"
 // import {hashHistory} from 'react-router'; 

class Home extends React.Component {
    render(){
        return(<Router>
            <div>
                <MyHeader />
                <Route exact path="/home/movie" component={Movie}></Route>
                <Route path="/home/cinema" component={Xcinema}></Route> 
            </div>
            </Router>)
    }
    // componentWillMount(){
    //     hashHistory.push('/home/movie')
    //     <ConnectedRouter history={hashHistory}></ConnectedRouter>
    // }
}
export default Home
