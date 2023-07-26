import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { MovieListComponent } from "./pages/movie-list/movie-list.component";
import { MovieDetailsComponent } from "./pages/movie-details/movie-details.component";
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
    {
        path: '', component: MoviesComponent, 
        children:[
            {path: "list", component: MovieListComponent},
            {path: "add", component: AddMovieComponent},
            {path: "details", component: MovieDetailsComponent},
            {
                path:"", redirectTo:'list', pathMatch:'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export default class MovieRoutingModule {}