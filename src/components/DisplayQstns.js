import React, {Component} from 'react' ;


const DisplayQstn = props =>{
    const {id,qustion,opt1,opt2}= props.qstnProp;

    return(
        <div style={{ display : 'inline-block', margin: 50}}>
        
        <p>{id}. {qustion}</p>
         
         <p> A: {opt1}</p>
         <p> B: {opt2}</p>
        <br></br>
         </div>
         )

    

}

export default DisplayQstn;