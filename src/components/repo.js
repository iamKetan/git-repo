import React ,{Component} from 'react'
//import axios from 'axios';
import { Card, CardText, CardBody,
     Button,Alert } from 'reactstrap';
//import RepoList from './list'
//import CardHeader from 'reactstrap/lib/CardHeader';
import './repo.css';
class Repo extends Component{
    render(){
        console.log(this.props.repositories)
        return(
             <div>
                 <Alert color="primary">REPO SEARCH RESULT</Alert>
                 
                
                { this.props.repositories.map((repo, index) => {                 
                        return <RepoList repositary={repo} key={index} />
                })}
                
             </div>
        )
    }
 }
class RepoList extends Component{
    render(){
        return(
            <div className="col-sm-4 col-lg-4 col-xs-12">

                <Card >
                    <CardBody>
                    
                    <img src={this.props.repositary.owner.avatar_url} className="img img-circle maxWidth20 marginLeft25" alt={this.props.repositary.name} />
                        {/* <CardImg>{this.props.repositary.owner.avatar_url}</CardImg> */}
                        <h3 className="textCenter">{this.props.repositary.name}</h3>
                        <a href={this.props.repositary.url}>OPEN ISSUES:{this.props.repositary.open_issues} </a>
                        FORKS:{this.props.repositary.forks}<br/>
                       <CardText>{this.props.repositary.description}</CardText>
                        
                       <a href={this.props.repositary.homepage} target="_blank" rel="noopener noreferrer"> <Button color="primary" className="width100" >VIEW PROFILE</Button></a>
                    </CardBody>     
                </Card>
              
                
            </div>
        )
   }
}
  export default Repo
