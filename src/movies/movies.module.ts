import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { RouterModule } from '@angular/router';
import MovieRoutingModule from './movies-routing.module';
import { SharedModule } from 'src/shared/shared.module';
 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieListComponent,
    MovieDetailsComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule,
    SharedModule,

    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule

  ]
})
export class MoviesModule { }
