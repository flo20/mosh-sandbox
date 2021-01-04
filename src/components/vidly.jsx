import React, { Component } from 'react';
import { getMovies } from "./../service/fakeMovieService";
import Like from "../common/like"
import Pages from "./../common/pages"


export default class Vidly extends Component {
    state = {
        movies: getMovies(),
        updateStatus: "",
        pageNumbers: 4,
        current:1
        // likeButton:false
    }

    handleDelete = (movie) => {
      //  console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id)
       this.setState({movies:movies})
    }

    handleLike = (movie) => {
        console.log("Liked button", movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    
    //     const like =  this.state.likeButton && <AiOutlineHeart />  
    //    this.setState({likeButton:like})
       
    }
    handlePageChange = (pages) => {
        console.log(pages);
        this.setState({current:pages})
    }

    render() {
        const {length : counts} = this.state.movies
            if (counts === 0) return "There is no movie in the database";
        return (
            <div>
                <p>Showing {counts} movies</p>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Like</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie =>
                            <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like liked={movie.liked}
                                     onClick={() => this.handleLike(movie)}
                                /></td>
                                  <td>
                                    <button onClick={()=>{this.handleDelete(movie)}}>Delete</button>
                                </td> 
                            </tr>
                        )}
                        
                    </tbody>
                </table>
                <Pages itemsCount={counts} pageSize={this.state.pageNumbers} onPageChange={this.handlePageChange} currentPage={this.state.current}/>
            </div>
        )
    }
}
