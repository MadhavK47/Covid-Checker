import React, {Component} from 'react' ;
import check from '../images/check.jpg';
import '../App.css';


class Score extends Component{

    render(){

        return(
            <div>
<h2> News Feed</h2>
<hr></hr>

<h4>Coronavirus: What you need to know about COVID-19 ?</h4>
<button className="button moreBtn" ><span>Know more</span></button>
<img  className="imgCls" src={check} alt="image"></img>
<h4>Tips for Self hygeine</h4>
<ul>

  <marquee behavior="scroll" direction="left">Wash hands regulary : Use face mask : Maintain social distance</marquee>
  
  
</ul>


                </div>
        )
    }
}

export default  Score;