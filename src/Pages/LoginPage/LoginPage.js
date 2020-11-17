import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import UINavbar from '../../UI_Components/Navbar/UINavbar';

import './LoginPage.scss';
export default class LoginPage extends Component{
    render(){
        return <div className='mainCSS'>
            <UINavbar />
                <div className="FormContainer"><LoginForm /></div>
            </div>
    }
}