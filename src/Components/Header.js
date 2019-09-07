import React,{Component} from "react"
import Img from 'react-image'
import logo from '../Resources/images/Stockrr.png'

class Header extends Component{

    menuContent(){
        return(
            <div className='menu-section'>
                <div className='logo'>
                    <Img src={logo}/>
                </div>
                <div className='menu-links'>
                    <a href='#'>Home</a>
                    <a href='#'>Article</a>
                    <a href='#'>News</a>
                    <a href='#'>Market</a>
                    <a href='#'>Portfolio</a>
                </div>
                <div className="ui action input" style={{flex:"2"}}>
                    <input style={{height:"3em",marginTop:'0.4em'}} type="text" placeholder="Search.." />
                    <button className="ui icon button" style={{height:"3em",marginTop:'0.4em'}}>
                        <i className="search icon" style={{height:"1.3em",marginTop:'0.4em'}}></i>
                    </button>
                </div>
                <div className='menu-links'>
                    <a href='#'>Login</a>
                    <a href='#'>Help</a>
                </div>
                
            </div>
        )
    }    
    headerContent(){
        return(
            <div className='header-section'>
                {this.menuContent()}
            </div>
        )
    }
    render(){
        return(
            this.headerContent()
        )
    }
}

export default Header