import React from 'react';
import Home from './components/home.js';
import About from './components/about.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
            </Router>
        </div>
    );
}

export default App;
