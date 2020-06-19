import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link, NavLink, Redirect } from 'react-router-dom'

import Navbar from './Navbar'

import './user/signin.css'

import Movie from './movies/Movie'



export default class Dashboard extends React.Component {
    constructor(props) {

        super(props)

        

        const token = localStorage.getItem("token")
        let isLogedIn = true

        if (token == null) {
            isLogedIn = false
        }

        this.state = {
            isLogedIn,
            movies:[]
        }
    }
    

    componentDidMount() {
        axios.get('http://localhost:1234/movie/')
         .then(response => {
             //console.log(response.data)
           this.setState({ movies: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }

      

      moviesList() {
        return this.state.movies.map(currentmovie => {
          return <Movie movie={currentmovie} deleteMovie={this.deleteMovie} key={currentmovie._id}/>;
        })
      }

    render() {

        if (!this.state.isLogedIn) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Navbar />

                
                <Link to="/addmovie"><button type="button" class="btn btn-success pull-right">AddMovie</button></Link>
                <div className="container" >
                
                    <div class="row">
                        

                        {this.moviesList()}

                        

                    </div>
                </div>

            </div>

        )
    }
}