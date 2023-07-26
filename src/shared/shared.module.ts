import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DestroyComponent } from './components/destroy/destroy.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DestroyComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
