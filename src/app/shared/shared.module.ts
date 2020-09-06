import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
