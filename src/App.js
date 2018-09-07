import React, { Component } from 'react';
import { Navbar } from './Navbar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Navbar></Navbar>
                </div>
                <div className="container">
                    <p className="text-center">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
