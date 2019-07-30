import React from 'react';
import Home from './frontend/home.js';
import About from './frontend/about.js';
import Sponsor from './frontend/sponsor.js';
import Blogs from './frontend/blogs.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import './App.css'

const styles = theme => ({
    App:{
        textAlign: "center",
    }
})

class App extends React.Component{
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.App}>
                <Router>
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                    <Route path="/sponsor/" component={Sponsor} />
                    <Route path="/blogs/" component={Blogs} />
                </Router>
            </div>
        );
    }
}

export default withStyles(styles)(App);
