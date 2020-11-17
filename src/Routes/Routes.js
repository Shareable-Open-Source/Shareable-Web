import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage/LoginPage';
import UINavbar from '../UI_Components/Navbar/UINavbar';
export default function  Routes(){
    return <>
            <UINavbar />
            <Switch>
                <Route path='/' exact component={LoginPage} />
            </Switch>
    </>;
}