import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import SignAndRegister from './SignInAndReg'
import './IncomingModal.css'
const ModalModalExample = () => (
  <Modal trigger={<button className="loginbutton">Login/Register</button>}>
    <SignAndRegister/>
  </Modal>
)

export default ModalModalExample