import React, {Component} from 'react' ;
import './App.css';
import Questions from './components/Questions';

import Score from './components/Score';
import {Link} from 'react-router-dom';


class  App extends Component  {
  render() {
  return (
    <div class="container-fluid cont" >
      

  <div class="row">
  <div class="col-sm-8"  >
    <div className="header"><h2>Covid Symptoms checker</h2></div>
  
  <hr></hr>
   <br></br>
 <Questions></Questions>
  
  </div>
  
  <div class="col-sm-4 Score">
    <Score></Score>

  </div>
</div>
    </div>
  )
}
}

export default App;
