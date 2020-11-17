import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
export default function  Routes(){
    return <>
            
            <Switch>
                <Route path='/' exact component={LoginPage} />
                {/* <Route path='/home/*' exact component={HomePage} /> */}
                <Route path='/home*' exact component={HomePage} />
            </Switch>
    </>;
}