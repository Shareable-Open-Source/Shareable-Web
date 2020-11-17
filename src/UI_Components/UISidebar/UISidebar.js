import React, { Component } from 'react'
import { Loader } from 'rsuite';
import './UISidebar.scss';


class SidebarActions extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="SidebarEachItem">
            
            <span>
                {this.props.data.name}
            </span>
        </div>
    }
}
export default class UISidebar extends Component{
    constructor(props){
        super(props)
        this.state = {
            Title:'Shareable',
            actions:[
                {
                    name:'Home',
                    path:'',
                    icon:'home'
                },
                {
                    name:'Practice',
                    path:'',
                    icon:'home'
                },
                {
                    name:'Explore',
                    path:'',
                    icon:'home'
                },
                {
                    name:'Profile',
                    path:'',
                    icon:'home'
                },
            ]
        }
    }
    render(){
        return <div className="SideBarContainer">
            <div className="SidebarTitle">
                <span>{this.state.Title}</span>
            </div>
            <div className="SidebarContentsContainer">
                {this.state.actions.map(each=>{
                    return <SidebarActions data={each} />
                })}
            </div>
            <div className="SidebarBottomAction">
                <Loader />
                <span> Logout</span>
            </div>
        </div>
    }
}