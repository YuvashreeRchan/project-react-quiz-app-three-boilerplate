import React from 'react';
import {Link} from "react-router-dom"
export default class ResultComponent extends React.Component {

    render() {
        let score = localStorage.getItem("score")
        let attemped = localStorage.getItem("currques")
        return (
        <div className ="result-container">
            <h1 id="resultHeading">Result</h1>
            <div className='resultbox'>
                <h2 className='resultText'>You need more practice!</h2>
                <h2 id="score"><b>Your score is {score}</b></h2>
                <div className = "info">
                    <div>Total number of questions</div>
                    <div>15</div>
                </div>
                <div className = "info">
                    <div>Number of questions attempted</div>
                    <div>{attemped}</div>
                </div>
                <div className = "info">
                    <div>Number of correct answers</div>
                    <div>{score}</div>
                </div>
                <div className = "info">
                    <div>Number of wrong answers</div>
                    <div>{attemped - score}</div>
                </div>
            </div>
            <div className="PlayBtns">
                <Link to={"/QuizComponent"}><button id = "play-again">Play Again</button></Link>
                <Link to={"/"}><button id = "back-home">Back to Home</button></Link>
            </div>
        </div>
        )
    }
    }
