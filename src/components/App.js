import React, { Component } from 'react';
import axios from 'axios';
import { Card,Alert } from 'reactstrap';
import './App.css';
import Repo from '../components/repo'

class App extends Component {
  constructor(){
    super();
    this.state={
      repositories:[],
      query:''
    }
    this.formSubmission=this.formSubmission.bind(this);
  }
  formSubmission(e){
    const k = document.getElementById('valueOfText').value;
    
    e.preventDefault()
          axios.get('https://api.github.com/search/repositories?q='+k+'').then((response)=>{
              this.setState({
                  repositories:response.data.items
                  
              })
          }).catch((err)=>{
              console.log(err);
          })
        }
    
  render() {
    return (
      <div className="container">
    
       <Card className="marginBottom">
       <Alert color="primary marginTop marginTop10New">GIT REPOSITARY FILTER</Alert>
        <form onSubmit={this.formSubmission} className="textCenter"> 
              <input type="text" placeholder="placeholder" className="form-control" id="valueOfText"/>
              <input type="submit"  value="SEARCH"  className="btn btn-primary marginTop10"/>
         </form> 
       </Card>
       
       <Repo repositories={this.state.repositories}/>

      </div>
    );
  }
}

export default App;