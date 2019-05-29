import React,{Component} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import SignAndRegister from './SignInAndReg'
import './IncomingModal.css'
class LoginModal extends Component{

render(){
    return(
  <Modal trigger={<button className="loginbutton">Login/Register</button>}>
    <SignAndRegister doSetCurrentUser={this.props.doSetCurrentUser}/>
  </Modal>
  )
}
}


export default LoginModal