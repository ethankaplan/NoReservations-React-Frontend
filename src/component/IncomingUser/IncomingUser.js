import React, {Component} from 'react'
import Login from './LogAndReg/Login'
import Register from './LogAndReg/Register'

class IncomingUser extends Component {
    render() {
        return (
        <div>
            <div className="LoginComp leftCol" >
                <Login currentUser={this.props.currentUser} doSetCurrentUser={this.props.doSetCurrentUser}/>
            </div>
            <div className="RegisterComp rightCol">
                <Register currentUser={this.props.currentUser} doSetCurrentUser={this.props.doSetCurrentUser}/>
            </div>

        </div>
        
            )}
}

export default IncomingUser