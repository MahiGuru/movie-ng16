import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.scss']
})
export class DestroyComponent implements OnDestroy {
  destroy$ = new Subject<void>();

  ngOnDestroy(): void { 
      this.destroy$.next(); 
      this.destroy$.complete();
    
  }
}
