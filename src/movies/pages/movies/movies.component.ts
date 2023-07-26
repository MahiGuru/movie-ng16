import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { SharedMenuDataService } from 'src/movies/services/shared-menu-data.service';
import { DestroyComponent } from 'src/shared/components/destroy/destroy.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent extends DestroyComponent implements OnInit {
  constructor(public shareMenuData: SharedMenuDataService) {
    super()
  }
  ngOnInit(): void {
    console.log("Menu Parent page ONINIT ");

    this.shareMenuData.menuDataObservable$.pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log("calling from menu page ", res);
    })
  }
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 2, color: 'lightgreen'}, 
  ];
}
