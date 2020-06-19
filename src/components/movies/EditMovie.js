import React from 'react'
import axios from 'axios'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Navbar from '../Navbar'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddMeal extends React.Component{
    constructor(props){
        super(props)

        this.onChangeDate=this.onChangeDate.bind(this)
        this.onChangeActor=this.onChangeActor.bind(this)
        this.onChangeDescription=this.onChangeDescription.bind(this)
        this.onChangeDirector=this.onChangeDirector.bind(this)
        this.onChangeDuration=this.onChangeDuration.bind(this)
        this.onChangeGenere=this.onChangeGenere.bind(this)
        this.onChangeLanguage=this.onChangeLanguage.bind(this)
        this.onChangeMovie=this.onChangeMovie.bind(this)
        this.onChangeRating=this.onChangeRating.bind(this)

        this.state = {
          moviename:'',
          duration:'',
          language:'',
          description: '',
          ratings:'',
          director:'',
          actors:'',
          response:'',
          releasedate:new Date()

        }
      }

      componentDidMount() {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:1234/movie/'+this.props.match.params.id,{ headers: {"Authorization" : `Bearer ${token}`} })
         .then(response => {
            console.log(response.data)
           
           this.setState({ 
            moviename:response.data.moviename,
            duration:response.data.duration,
            ratings:response.data.ratings,
            director:response.data.director,
            actors:response.data.actors,
            
             description:response.data.description,
             generes:response.data.generes,
            language:response.data.language,
            
            });
            
         })
         .catch((error) => {
            
            console.log(error);
         })
      }
      
    
      onChangeDate(releasedate){
        this.setState({
            releasedate: releasedate
          });
      }

      onChangeActor(e){
          this.setState({
              actors:e.target.value
          })
      }

      onChangeDescription(e){
          this.setState({
              description:e.target.value
          })
      }

      onChangeDirector(e){
          this.setState({
              director:e.target.value
          })
      }

      onChangeDuration(e){
          this.setState({
              duration:e.target.value
          })
      }

      onChangeGenere(e){
          this.setState({
              generes:e.target.value
          })
      }

      onChangeLanguage(e){
          this.setState({
              language:e.target.value
          })
      }
    
      onChangeMovie(e){
          this.setState({
              moviename:e.target.value
          })
      }

      onChangeRating(e){
          this.setState({
              ratings:e.target.value
          })
      }

      handleSubmit = event => {
        event.preventDefault();
        const token = localStorage.getItem("token")
        
        const movie={
             moviename:this.state.moviename,
            duration:this.state.duration,
            ratings:this.state.ratings,
            director:this.state.director,
            actors:this.state.actors,
            
             description:this.state.description,
             generes:this.state.generes,
            language:this.state.language,
            releasedate:this.state.releasedate

        }
        console.log(movie)
        axios.post("http://127.0.0.1:1234/movie/update/"+this.props.match.params.id,
         movie,
          { headers: {"Authorization" : `Bearer ${token}`} }
        )
          .then(res => {
             console.log(res.data)

             this.setState({
                 response:res.data
             })
            
          })
         
          
      }

      
    
      render() {
          console.log(this.state.response)

        if(this.state.response==="Successfull"){
            return <Redirect to="/"/>
          }
          
        return (
          <div>
          <Navbar/>
          
          <div className="text-center">
            <form className="form-signin" onSubmit={this.handleSubmit}>
            
             <h1 className="h3 mb-3 font-weight-normal">UpdateMovie</h1>
              <label className="sr-only" >MovieName</label>
              <input type="text"  className="form-control" placeholder="Movie_Name" required autoFocus name="moviename" value={this.state.moviename} onChange={this.onChangeMovie} />
              
              <label  className="sr-only" >Duration</label>
              <input type="number" className="form-control" placeholder="Duration"  name="duration" value={this.state.duration} onChange={this.onChangeDuration} />
              
              <label  className="sr-only" >Rating</label>
              <input type="number"  className="form-control" placeholder="Rating" required  name="ratings" value={this.state.ratings} onChange={this.onChangeRating} />
    
              <label  className="sr-only" >Description</label>
              <textarea  className="form-control" placeholder="Description" required  name="description" value={this.state.description} onChange={this.onChangeDescription}/>
              
              <label className="sr-only" >Director</label>
              <input type="text"  className="form-control" placeholder="Director Name" required  name="director" value={this.state.director} onChange={this.onChangeDirector} />
              
              <label className="sr-only" >Actors</label>
              <input type="text"  className="form-control" placeholder="Actors Name" required  name="actors" value={this.state.actors} onChange={this.onChangeActor} />
              
              <label className="sr-only" >Language</label>
              <input type="text"  className="form-control" placeholder="Language" required  name="language" value={this.state.language} onChange={this.onChangeLanguage} />
              
              <label className="sr-only" >Generes</label>
              <input type="text"  className="form-control" placeholder="Generes" required  name="generes" value={this.state.generes} onChange={this.onChangeGenere} />
              

              <div className="form-group">
              <label>Release Date : </label>
          <DatePicker
              selected={ this.state.releasedate }
              onChange={ this.onChangeDate }
              name="startDate"
              dateFormat="dd/MM/yyyy"
             
              
          />
          
          
        </div>
              <button className="btn btn-lg btn-primary btn-block" >Update</button>
              <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
            </form>
          </div>
          </div>
    
        )
      }
    }