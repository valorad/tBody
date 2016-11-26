import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymComponent } from './gym.component';
import { GymListComponent } from './gym-list/gym-list.component';
import { GymDetailComponent } from './gym-detail/gym-detail.component';
import gym_routes from './tBGym-routing.module'
import {GSCComponent} from './g-sc/g-sc.component'
@NgModule({
  imports: [
    CommonModule,
    gym_routes 
  ],
  declarations: [
	GymComponent,
	GymListComponent,
	GymDetailComponent,
	GSCComponent
  ]
})
export class GymModule { }
