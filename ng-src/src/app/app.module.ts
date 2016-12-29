import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AgmCoreModule } from 'angular2-google-maps/core';

import { tBodyRoutingModule } from './tBody-routing.module'; 

import { GymModule } from './gym/gym.module';
import { AppComponent } from './app.component';

import { IndexComponent } from './index/index.component';
import { GymDetailComponent } from './gym/gym-detail/gym-detail.component';
import { GMapComponent } from './gmap/gmap.component';
import { BMapComponent } from './bmap/bmap.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
GymDetailComponent,
    IndexComponent,
    GMapComponent,
    BMapComponent,
    HomeComponent,

   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBikYuz3yf-C5oP6XVyqLq3eYtvuUp_nkk'
    }),
    tBodyRoutingModule,
    GymModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
