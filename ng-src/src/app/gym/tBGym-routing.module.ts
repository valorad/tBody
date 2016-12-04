import { RouterModule, Routes } from '@angular/router';

import { GymListComponent } from './gym-list/gym-list.component';
import { GSCComponent } from './g-sc/g-sc.component'


const gym_routes: Routes = [
    {
    	path: '',
    	component: GymListComponent,
    	children: [

    	],
    	
 },
];
export default RouterModule.forChild(gym_routes)

