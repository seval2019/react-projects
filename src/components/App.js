import React from "react";
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        movies: [],

        seachQuery: ""

    }

    async componentDidMount(){
        const baseURL = "http://localhost:3002/movies";
        const response = await fetch(baseURL);
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({movies: data})
    }

    movieDeleted = (movie) => {
        const newMovieList = this.state.movies.filter(
            silinecekFilm => silinecekFilm.id !== movie.id
        );
        // this.setState({
        //     movies: newMovieList
        // })

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    seachMovie = (event) => {
        //console.log(event.target.value)
        this.setState({seachQuery:event.target.value})
    }

    render() {
        let filteredMovies=this.state.movies.filter(
            (movie) =>{
                return movie.name.toLowerCase().indexOf(this.state.seachQuery.toLowerCase()) !== -1
            }

        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar
                            searchMovieProp={this.seachMovie}
                        />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    movieDeletedProps={this.movieDeleted} />

            </div>
        )
    }
}
export default App;