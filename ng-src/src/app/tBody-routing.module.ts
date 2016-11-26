import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

export const routingComponents = [
	IndexComponent,

]

const routes: Routes = [
	{path: '', component: IndexComponent},
    {path: 'index', component: IndexComponent},
    {
    	path: 'gym',
    	loadChildren: './gym/gym.module#GymModule'
 },
];



@NgModule({
	imports: [
		RouterModule.forRoot(routes,{ useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class tBodyRoutingModule{}

