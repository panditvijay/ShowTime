import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { NavLink,Link, Redirect } from 'react-router-dom'
import Navbar from '../Navbar'

export default class SignUp extends React.Component {
  constructor(props){
    super(props)

    let sucessMessage="alert alert-success alert-dismissible fade"

    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      username: '',
      password: '',
      sucessMessage
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

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email,
        password: this.state.password
      
    };
    axios.post("http://127.0.0.1:1234/users/signup",
      user
    )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

      this.setState({
        firstName:'',
      lastName:'',
      email:'',
      password: '',
      sucessMessage:"alert alert-success alert-dismissible"
      })
  }

  render() {
    return (
      <div>
      <Navbar/>
      
     <div class={this.state.sucessMessage}>
     <strong>Success!</strong> Your account has been created successfully,<Link to="/"> Click here</Link> to login now ^^
     <button type="button" class="close" data-dismiss="alert">&times;</button>
 </div>
      
      <div className="text-center">
        <form className="form-signin" onSubmit={this.handleSubmit}>
        
         <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
          <label className="sr-only" >FirstName</label>
          <input type="text"  className="form-control" placeholder="First Name" required autoFocus name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          
          <label  className="sr-only" >LastName</label>
          <input type="text" className="form-control" placeholder="Last Name" required name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          
          <label htmlFor="inputEmail" className="sr-only" >Email</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email" required  name="email" value={this.state.email} onChange={this.handleChange} />

          
          <label htmlFor="inputPassword" className="sr-only" >Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" value={this.state.password} onChange={this.handleChange} />

          <button className="btn btn-lg btn-primary btn-block" data-toggle="modal" data-target="#exampleModal" >Sign Up </button>


          
          <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
        </form>

        
      </div>

      

      </div>

    )
  }
}