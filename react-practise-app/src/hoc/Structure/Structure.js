import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary'
import classes from './Structure.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Structure extends Component {
    state = {
        showSideDrawer: true
    }

    closeSideDrawerHandler = () =>{
        this.setState({showSideDrawer: false})
    }

    openSideDrawerHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}; 
        })
    }

    render(){
        return(
            <Auxiliary>
                <Toolbar clicked = {this.openSideDrawerHandler}/>
                <SideDrawer show = {this.state.showSideDrawer} clicked = {this.closeSideDrawerHandler}/>
                <main className = {classes.Content}> 
                    {this.props.children}
                </main>
    
            </Auxiliary>
        )
    }
}

export default Structure;