import React, { Component } from 'react';
import { Link } from 'react-router'; 
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="navComponent">
                    <h4>
                        ReactJS Application
                        <Link to="/">Home</Link>  
                        <Link to="/about">About</Link>   
                    </h4>                            
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;