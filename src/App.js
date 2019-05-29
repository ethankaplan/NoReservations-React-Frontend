import React, {Component} from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import DividedIncoming from './component/IncomingUser/SignInAndReg'
import NavBar from './component/NavBar/NavBar'
import { Switch, Route,withRouter,Redirect } from 'react-router-dom'

class App extends Component{
  state={
    currentUser:null
  }
  render(){
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} doLogout={null}/>
        
      </div>
  )};
}

export default withRouter(App);
