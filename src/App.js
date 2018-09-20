import React, { Component } from 'react';
import { Navbar } from './Navbar';
import './App.css';
import Home from './pages/Home';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Navbar></Navbar>
                </div>
                <div className="container mt-4">
                    <Home></Home>
                </div>
            </div>
        );
    }
}

export default App;
