import React from 'react';
import {Link} from "react-router-dom";

export default class HomeComponent extends React.Component {
    
    render() {
        return (
        <div className="home-container">
            <h1>Quiz App</h1>
            <Link to={"/QuizComponent"}><button className="play-button">Play</button></Link>
        </div>
        )
    }
}
