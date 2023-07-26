import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import Movie from 'src/movies/models/movie.model';
import { Router } from '@angular/router';
import { SharedMenuDataService } from '../../services/shared-menu-data.service';
import { Subject, takeUntil } from 'rxjs';
import { DestroyComponent } from 'src/shared/components/destroy/destroy.component';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends DestroyComponent implements OnInit {
  public movies: any;

  constructor(public movieService: MovieService, private router: Router, public sharedMenuService: SharedMenuDataService) {
    super();
  }

  ngOnInit() {
    console.log("Menu list page ONINIT ");
    this.movieService.getMovies().pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.movies = movies.results;
      console.log("Movies triggered from component", this.movies);
    });
    this.sharedMenuService.menuDataObservable$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log("Shared menu data service observable ", data);
    })
  }
  clickCard(movie: Movie) {
    this.sharedMenuService.setData(movie);
    console.log("clicked card");
    this.router.navigate(["movies", 'details'])
  } 

}
