import React, {Component} from 'react' ;
import '../App.css';
import check from '../images/check.jpg';
import covid from '../images/covid.jpg';

import Score from './Score';
import QuestionBank from '../data/QuestionBank';
import DisplayQstns from './DisplayQstns';

class Questions extends Component {
   state = {
    showQstn:false,
    showButton: true,
    userAnswer: null,
    currentQuestion: 0,
    userScore : 0,
    showSevierity : true,
    options: []

}

    loadQuiz =() =>{
        console.log(this.state);
      const {currentQuestion} =this.state;
      this.setState(() => {
          return{
              questions : QuestionBank[currentQuestion].question,
              options : QuestionBank[currentQuestion].options
          }  
      }
      ) 
    }

    componentDidMount(){
        this.loadQuiz();
        console.log("In componentDidMount ");
    }

    handleClick =() => {
        this.setState({
            showQstn: true,
            showButton: false
        });
      }

      handleNextQstn = () =>{
        let usrScr =this.state.userScore;
        if(this.state.userAnswer == "Yes"){
             usrScr= this.state.userScore + 5;
           }
           console.log("usrScr" +usrScr); 
        this.setState({
            currentQuestion : this.state.currentQuestion + 1,
            userScore : usrScr,
            userAnswer : null
        })
        console.log("curr qstn "+this.state.currentQuestion);
        console.log("curr answer "+this.state.userAnswer);
      }

      componentDidUpdate(prevProps,prevState){
        const {currentQuestion} =this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion)
         {
            this.setState(() => {
                return{
                    questions : QuestionBank[currentQuestion].question,
                    options : QuestionBank[currentQuestion].options
                }  
            }
            )
         }
      }

      checkAnswer = answer =>{
        
          this.setState({
              userAnswer : answer,
              
          })

        }

        handleSubmit = () => {
            this.setState({
                showSevierity : false,
                    })
        }
    render(){
        console.log("score " +this.state.userScore);
        const {questions, options, currentQuestion, userAnswer}=this.state;
        return(
            <div >
               
               { 
                       this.state.showButton ?
                <div>
                    
                  <h3>What concerns you
about your health today? </h3><h4>
<marquee behavior="alternate" direction="right"> <img  className="imgCls2" src={covid} alt="image"></img></marquee>
Check your symptoms and find out what could be causing them. It's fast, free and anonymous.</h4>


 <button className="button" onClick = {this.handleClick} > <span>Start Check-up</span></button>


            
                   
                   <br></br>
                   
               </div> : 
                this.state.showSevierity ?
                <div>
                     
                    <h3>{questions}</h3> 
                     {options.map (opt =>(
                         <p key={opt.id} onClick={() => this.checkAnswer(opt)} className={`ui floating message 
                         ${userAnswer === opt ? 'selected' : null} `}
                         >{opt}</p>
                     ))}
                      {currentQuestion < QuestionBank.length -1 &&
                    <button className="button nxtBtn" onClick = {this.handleNextQstn} > <span>Next </span></button> }
                    {currentQuestion === QuestionBank.length -1 && <button className="button nxtBtn" onClick={this.handleSubmit}><span>Submit </span></button> }
                     <span>{`Question ${currentQuestion} of ${QuestionBank.length -1 }`}</span>
                   
                    </div> : null 
            }

            {
                this.state.showSevierity ? null : this.state.userScore >=15 ? 
                <div>
                    <h4>Seviere</h4>
                    <h4>Immediately consult Doctor or dial toll free 104 </h4>
                </div> : 
                <div>
                    <h4>Less Seviere</h4>
                    <h4>Stay home stay Safe!</h4>
                </div>
                 
            }
                </div>
        )
    }
}


export default Questions;