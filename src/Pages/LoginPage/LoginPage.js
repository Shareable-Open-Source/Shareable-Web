import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'

import './LoginPage.scss';
export default class LoginPage extends Component{
    render(){
        return <div className='mainCSS'>
                <div className="FormContainer"><LoginForm /></div>
            </div>
    }
}