import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Movie from '../models/movie.model';
import { map } from 'rxjs/operators';

interface MovieResponse {  
  results: Movie[];
  total_results: number;
  page: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public http: HttpClient) {

   }
   public options = { 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTE0NjBkNDEzNTA4N2ZhYzZmYjEwMDQ0MTc1NjMxYSIsInN1YiI6IjY0YzEyNjViMWNmZTNhMGViNWU5OTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzj9tPDiziKh2DPLWh5gybtk4TpUGUzcIhV5Br8K0-M'
    }
  };
  
  // fetch('https://api.themoviedb.org/3/movie/changes', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
   public getMovies(){
      return this.http.get<MovieResponse>("https://api.themoviedb.org/3/discover/movie", this.options).pipe(
        map((movies: MovieResponse) => {
          return movies
        })
      );
   }

   public getMovieDetails(movieId: number) {
    return this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/'+movieId, this.options).pipe(map(movie => {
      return movie;
    }));
   }
}
