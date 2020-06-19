import React from 'react'

import axios from 'axios'
import { Link, NavLink, Redirect } from 'react-router-dom'

export default class ListMovies extends React.Component{

    constructor(props){
        super(props)

        this.handle=this.handle.bind(this)
        this.deleteMovie=this.deleteMovie.bind(this)

        let moviename=props.movie.moviename
        let duration=props.movie.duration
        let ratings=props.movie.ratings
        let director=props.movie.director
        let actors=props.movie.actors
        let _id=props.movie._id
        let description=props.movie.description
        let generes=props.movie.generes
        let language=props.movie.language
        let releasedate=props.movie.releasedate

        let isVisible="collapse"
        let response

        this.state={
          moviename,
          duration,
          ratings,
          director,
          actors,
          _id,
          description,
          language,
          generes,
          releasedate,
          isVisible,
          response
        }


    }

    deleteMovie(id) {
      const token = localStorage.getItem("token")
        
      axios.delete('http://localhost:1234/movie/'+id,{ headers: {"Authorization" : `Bearer ${token}`} })
        .then(res =>{ 
          console.log(res.data)

          this.setState({
            response:res.data
          })
          window.location = '/';
        
        });
        
    }

    handle(){
      if(this.state.isVisible==="collapse"){
      this.setState({
        isVisible:"show"
      })
    }else{
      this.setState({
        isVisible:"collapse"
      })
    }
    }

    render(){
      
          
        return(
            <div class="col-sm-4">
                                <div class="card bg-light mb-3">
                                <img class="card-img-top" src="https://previews.123rf.com/images/artinspiring/artinspiring1605/artinspiring160500353/57432298-word-made-of-musical-notes-on-white-background-black-notes-pattern-black-and-white-design-word-movie.jpg" alt="Card image cap"></img>
                                    <div class="card-body">
                                    
                                    <table class="table">
                                    
                                    <tbody>
                                      <tr>
                                      
                                        <td><b>Movie Name</b></td>
                                        <td>{this.state.moviename}</td>
                                        
                                      </tr>
                                      <tr>
                                      
                                        <td><b>Rating</b></td>
                                        <td>{this.state.ratings}</td>
                                        
                                      </tr>
                                      <tr>
                                      
                                        <td><b>Duration</b></td>
                                        <td>{this.state.duration} mins</td>
                                        
                                      </tr>
                                      <tr>
                                      
                                        <td><b>Director</b></td>
                                        <td>{this.state.director}</td>
                                        
                                      </tr>
                                      <tr>
                                          
                                            <td><b>Language</b></td>
                                            <td>{this.state.language}</td>
                                            
                                          </tr>
                                      
                                      
                                    <tr>
                                    <td>
                                    
                                        <Link to={"/"} data-toggle="collapse" onClick={this.handle}  role="button" aria-expanded="false" >
                                        <i class="fa fa-expand fa-fw"/>
                                            Expand
                                        </Link> | <Link to={"/edit/"+this.state._id}><i class="fa fa-pencil fa-fw"/>Edit</Link> | <Link  to={"/"}  onClick={() => { this.deleteMovie(this.state._id) }}><i class="fa fa-trash-o fa-fw"/>Delete</Link>
                                    
                                    </td>
                                    
                                    </tr>

                                    

                                    </tbody>
                                  </table>
                                    </div>
                                    

                                    <div class={this.state.isVisible}  >
                                        <div class=" card-body" >
                                        <table class="table">
                                    
                                        <tbody>
                                        <tr>
                                          
                                            <td><b>Release Date</b></td>
                                            <td>{this.state.releasedate}</td>
                                            
                                          </tr>
                                          <tr>
                                          
                                            <td><b>Description</b></td>
                                            <td>{this.state.description}</td>
                                            
                                          </tr>
                                          
                                          <tr>
                                      
                                        <td><b>Actors</b></td>
                                        <td>{this.state.actors}</td>
                                        
                                      </tr>
                                          <tr>
                                          
                                            <td><b>Generes</b></td>
                                            <td>{this.state.generes}</td>
                                            
                                          </tr>
                                          </tbody>
                                          </table></div>
                                    </div>
                                </div>
                                </div>
        )
    }
}