import { RouterModule, Routes } from '@angular/router';

import { GymListComponent } from './gym-list/gym-list.component';
import { GymDetailComponent } from './gym-detail/gym-detail.component';
import { GSCComponent } from './g-sc/g-sc.component'


const gym_routes: Routes = [
    {
    	path: 'gym',
    	component: GymListComponent,
    	children: [
	    	{
	    		path: '',
	    		component: GymListComponent
	    	},

	    	{
	    		path: 'id/:id',
	    		component: GymDetailComponent
	    	}
    	],
    	
 },
];
export default RouterModule.forChild(gym_routes)

