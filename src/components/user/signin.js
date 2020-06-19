import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {NavLink,Link, Redirect} from 'react-router-dom'
import './signin.css'
import Navbar from '../Navbar'
import { Modal, Button } from 'react-bootstrap'




export default class Signin extends React.Component {
  constructor(props){
    super(props)
    let isLogedIn=true
    const token = localStorage.getItem("token")

    

    if(token==null){
        isLogedIn=false
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    //this.onclick=this.

    this.onclick=this.onclick.bind(this)
    this.dismissHandler=this.dismissHandler.bind(this)

    this.state = {
      email: '',
      password: '',
      isLogedIn,
      isOpen:false
      
    }
  }
  

  handleChange = event => {

    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });


    //console.log(this.state.username+' '+this.state.password)
  }

  
  onclick(){
      this.setState({
        isOpen:true
      })
  }

  dismissHandler(){
      this.setState({
          isOpen:false
      })
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
        email: this.state.email,
        password:this.state.password
        
      };
    axios.post("http://127.0.0.1:1234/users/signin",
      user
    )
      .then(res => {
        
        console.log(res.data.data.user._id)
        if(res.data.data.token!=null){
          
         this.setState({
           isLogedIn:true,
           details:res.data
         },()=>{
           
          localStorage.setItem("token",res.data.data.token)
          localStorage.setItem("username",res.data.data.user.firstName)
          localStorage.setItem("id",res.data.data.user._id)
          
         })
        }
      })

      

    this.setState({
      email:'',
      password:''
    })
  }

  
  

  render() {
    
    if(this.state.isLogedIn){
     return <Redirect to="/dashboard"/>
    }
    

    return (
  
     <div>
     

     <Navbar />
     
     

     
      <div className="text-center">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only" >Email</label>
            <input type="text" id="inputEmail" className="form-control" placeholder="Email" required autoFocus name="email" value ={this.state.email} onChange={this.handleChange}/>
              <label htmlFor="inputPassword" className="sr-only" >Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" value ={this.state.password} onChange={this.handleChange}/>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  <p>Already a member?</p>
                  <Link to="/signup"><button className="btn btn-lg btn-secondary " >Sign Up </button></Link>
                  <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
          </form>
          </div>
          </div>
      
    )
  }
}