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
  providedIn: 'root',
})
export class MovieService {
  constructor(public http: HttpClient) {}

  public options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTE0NjBkNDEzNTA4N2ZhYzZmYjEwMDQ0MTc1NjMxYSIsInN1YiI6IjY0YzEyNjViMWNmZTNhMGViNWU5OTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzj9tPDiziKh2DPLWh5gybtk4TpUGUzcIhV5Br8K0-M',
    },
  };

  /***
   * GET MOVIES
   */
  public getMovies() {
    return this.http
      .get<MovieResponse>(
        'https://api.themoviedb.org/3/discover/movie',
        this.options
      )
      .pipe(
        map((movies: MovieResponse) => {
          return movies;
        })
      );
  }

  /***
   * GET MOVIE DETAILS BY Movie ID
   * MovieId - movie id to get full details
   */

  public getMovieDetails(movieId: number) {
    return this.http
      .get<MovieResponse>(
        'https://api.themoviedb.org/3/movie/' + movieId,
        this.options
      )
      .pipe(
        map((movie) => {
          return movie;
        })
      );
  }

  /***
   * SET MOVIE RATING BY Movie ID
   * MovieId - movie id to get full details
   * value: rating number like 8.5 or 6.2
   */
  public setMovieRating(movieId: number, value: number | string) {
    return this.http
      .post(
        'https://api.themoviedb.org/3/movie/'+movieId+'/rating',
        {
          value
        },
        this.options
      );
  }

  /***
   * GET MOVIE DETAILS BY Movie ID
   * MovieId - movie id to get full details
   */
  public getMovieReviews(movieId: number) {
    return this.http
      .get(
        'https://api.themoviedb.org/3/movie/'+movieId+'/reviews', 
        this.options
      );
  }
}
