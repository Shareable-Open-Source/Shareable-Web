import React, { Component } from 'react'
import { Button, Input, Loader } from 'rsuite'
import './LoginForm.scss'
export default class LoginForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      emailID:{
        visible:true,
        value:''
      },
      otp:{
        visible:false,
        value:''
      },
      formStatus:{
        submitted:false,
        result:null,
        middle:false
      }
    }

  }
  SubmitLogin = (event)=>{
    event.preventDefault();
    this.setState({formStatus:{middle:true}})

  }
    render(){
        return  <>
        <form className="formLogin" onSubmit={this.SubmitLogin}>
        
          <span>Login with Shareable</span>
          { this.state.emailID.visible === true?
                                              <div className='loginFormGroup'>
                                              <div>Email ID</div>
                                              <Input type="email" required placeholder="Email ID" defaultValue={this.state.emailID.value} />
                                            </div>
                                            
                                          :
                                          ''}


          { this.state.otp.visible === true? 
                                            <div className='loginFormGroup'>
                                              <div>OTP</div>
                                              <Input type="number" placeholder="OTP" defaultValue={this.state.otp.value}  />
                                            </div>
                                          :
                                          '' }


          <div className='loginFormGroup'>
            <Button type="submit" color="cyan" > {this.state.formStatus.middle === true?<Loader inverse />:''} Submit</Button>
          </div>
        </form>
        </> ;
    }
}