import React, { Component } from 'react';
import UIDashboard from '../../UI_Components/UIDashboard/UIDashboard';
import UISidebar from '../../UI_Components/UISidebar/UISidebar';
import './HomePage.scss';

export default class HomePage extends Component{
    render(){
        return <div className="HomePageContainer">
            <div className="HomePageSidebarContainer1 section">
                <UISidebar />
            </div>
            <div className="HomePageContentContainer1 section">
                <UIDashboard />
            </div>
        </div>
    }
}