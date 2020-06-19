import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {Link,NavLink, Redirect} from 'react-router-dom'
import './signin.css'

export default class Logout extends React.Component{
        constructor(props){
            super(props)

            localStorage.removeItem("token")
        }
    render(){

        return(
            <div className="text-center">
                <h2>Successfully logged out!!</h2>
               <button className="btn btn-sm btn-outline-secondary"><Link to="/">Login Again</Link></button> 
            </div>
        )
    }
}