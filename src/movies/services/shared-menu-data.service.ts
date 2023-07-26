import { Injectable } from '@angular/core';
import Movie from '../models/movie.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedMenuDataService {
  private menuDataSource = new BehaviorSubject<Movie | null>(null);

  menuDataObservable$ = this.menuDataSource.asObservable();
  constructor() { }

  setData(data: Movie) {
    this.menuDataSource.next(data);
  }

}
