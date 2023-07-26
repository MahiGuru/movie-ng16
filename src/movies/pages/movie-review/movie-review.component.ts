import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/movies/services/movie.service';
import { SharedMenuDataService } from 'src/movies/services/shared-menu-data.service';
import { DestroyComponent } from 'src/shared/components/destroy/destroy.component';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.scss']
})
export class MovieReviewComponent extends DestroyComponent implements OnInit {
  public movie: any;
  public movieReviews: any = [];
  constructor(public router: Router, public movieService: MovieService, public sharedMovieService: SharedMenuDataService) {
    super();
  }
  ngOnInit() {
    this.sharedMovieService.menuDataObservable$.pipe(takeUntil(this.destroy$)).subscribe((movie: any) => {
      this.movie = movie;
      this.movieService.getMovieReviews(movie.id).pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
        console.log("Movie reviews ", res);
        this.movieReviews = res.results;
      })  
    });
  }

  backButtonClick() {
    this.router.navigateByUrl('movies/list');
  }

}
