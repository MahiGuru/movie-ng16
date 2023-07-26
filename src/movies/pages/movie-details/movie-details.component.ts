import { Component, OnInit, OnDestroy, inject, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedMenuDataService } from 'src/movies/services/shared-menu-data.service';
import Movie from '../../models/movie.model'; 
import { DestroyComponent } from 'src/shared/components/destroy/destroy.component';
import { Subject, takeUntil } from 'rxjs';
import { MovieService } from 'src/movies/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent extends DestroyComponent implements OnInit {
  public movie: any; 

  constructor(private router: Router, public shareMenuData: SharedMenuDataService, public movieService: MovieService) {
    super(); 
  }
  ngOnInit() {     
    console.log("Menu Details page ONINIT "); 
    this.shareMenuData.menuDataObservable$.pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      console.log("Detais page iside ", res);
      // this.movie = res;
      if(res) {
        this.movieService.getMovieDetails(res.id).pipe(takeUntil(this.destroy$)).subscribe(moviedetails => {
          console.log("movie details ", moviedetails);
          this.movie = moviedetails
        })
      }
    });
  } 
  getMovieReview() {
    this.router.navigateByUrl("movies/reviews");
  }
  backButtonClick() {
    this.router.navigateByUrl('movies/list');
  }
}
