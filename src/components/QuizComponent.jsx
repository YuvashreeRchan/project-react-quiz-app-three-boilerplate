import React from 'react';
import data from "../../resources/quizQuestion.json";
import {Link} from "react-router-dom";

export default class QuizComponent  extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            score: 0,
        };
    }

    handleNextQues = ()=>{
        if(this.state.count < data.length - 1){ 
            this.setState((prevState) => ({
                count : prevState.count + 1
            }));
            }
        }
    
    handlePrevQues = () =>{
        if(this.state.count > 0) {
        
            this.setState((prevState) => ({
                count : prevState.count - 1
            }));
            }
        }
    
    handleQuit = () =>{
        window.confirm("Are you sure you want to exit the game?!");
    }

    handleOption = (e) => {
        const { count } = this.state;
        if (e.target.textContent === data[count].answer) {
            alert("Correct Answer");
            this.setState((prevState) => ({
                score: prevState.score + 1,
                count: prevState.count < 14 ? prevState.count + 1 : prevState.count,
            }));
        } else {
            alert("Wrong Answer");
            this.setState((prevState) => ({
                count: prevState.count < 14 ? prevState.count + 1 : prevState.count,
            }));
        }
    }

    handleFinish = () => {
        const { score, count } = this.state;
        localStorage.setItem("score" , score)
        localStorage.setItem("currques" , count)
    }
    
    render() {
        const {count}=this.state;
        return (
        <div className ="quiz-container">
            <div className = "box">
            <h1 id='heading'>Question</h1>

            <p id="quesNumber">{count + 1} of 15</p>
            <p id="question">{data[count].question}</p>
            
            <div id = "chooseOption">
                <div className = "options" onClick={this.handleOption}>{data[count].optionA}</div>
                <div className = "options" onClick={this.handleOption}>{data[count].optionB}</div>
                <div className = "options" onClick={this.handleOption}>{data[count].optionC}</div>
                <div className = "options" onClick={this.handleOption}>{data[count].optionD}</div>
            </div>

            <div className = "NavBtn">
                <div className="nav-btns" id = "prev" onClick={this.handlePrevQues}>Previous</div>
                <div className="nav-btns" id = "next" onClick={this.handleNextQues}>Next</div>
                <div className="nav-btns" id = "quit" onClick={this.handleQuit} >Quit</div>
                <Link to={'/ResultComponent'}><button className='nav-btns' id = "Finish" onClick={this.handleFinish}>Finish</button></Link>

            </div>
            </div>
            
        </div>
        
        )
    }
    }

