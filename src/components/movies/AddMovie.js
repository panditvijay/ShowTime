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

        let successMessage="alert alert-success alert-dismissible fade"

        this.state = {
          moviename:'',
          duration:'',
          language:'',
          description: '',
          ratings:'',
          director:'',
          actors:'',
          releasedate:new Date(),
          successMessage

        }
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
              moviename:e.target.value,
              successMessage:"alert alert-success alert-dismissible fade"
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
        axios.post("http://127.0.0.1:1234/movie/addmovie",
         movie,
          { headers: {"Authorization" : `Bearer ${token}`} }
        )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    
          this.setState({
            moviename:'',
          duration:'',
          language:'',
          description: '',
          ratings:'',
          director:'',
          actors:'',
          generes:'',
          successMessage:"alert alert-success alert-dismissible"
          })
      }

      
    
      render() {
        return (
          <div>
          <Navbar/>

          <div class={this.state.successMessage}>
          <strong>Success!</strong> Movies added successfully, Wanna add more Or<Link to="/dashboard"> Click here</Link> to see the result ^^
          <button type="button" class="close" data-dismiss="alert">&times;</button>
      </div>
          
          <div className="text-center">
            <form className="form-signin" onSubmit={this.handleSubmit}>
            
             <h1 className="h3 mb-3 font-weight-normal">AddMovies</h1>
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
              
              <label for="exampleFormControlFile1">Add Movie Poster</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>

              <div className="form-group">
              <label>Release Date : </label>
          <DatePicker
              selected={ this.state.releasedate }
              onChange={ this.onChangeDate }
              name="startDate"
              dateFormat="dd/MM/yyyy"
             
              
          />
          
          
        </div>
              <button className="btn btn-lg btn-primary btn-block" >Add </button>
              <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
            </form>
          </div>
          </div>
    
        )
      }
    }