import { Component, OnInit } from '@angular/core';

import { GymService } from '../gym.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.scss'],
  providers:[GymService]
})
export class GymListComponent implements OnInit {

  constructor(private gymService: GymService) { }

  public gyms = [];
  public error: string;

  ngOnInit() {
    this.gymService.getGymList().subscribe(
  resGymData => {this.gyms = resGymData;},
      resGymError => this.error = resGymError
    );
  }

}
