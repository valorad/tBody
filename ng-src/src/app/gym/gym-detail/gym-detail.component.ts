import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { GymService } from '../gym.service';

interface IGymLocation {
  lati: number;
  longi: number;
}

@Component({
  selector: 'app-gym-detail',
  templateUrl: './gym-detail.component.html',
  styleUrls: ['./gym-detail.component.scss'],
  providers:[GymService]
})
export class GymDetailComponent implements OnInit {
  public id: string;
  public gyms = [];
  public error: string;
  constructor(private route: ActivatedRoute, router: Router, private gymService: GymService) { }

  ngOnInit() {
     this.id = this.getId();
     //subscribe一下gymserice，然后选择一下得到数据
     this.gymService.getGymList().subscribe(
       (resGyms) => this.gyms = resGyms,
       (resError) => this.error = resError
     );
     let location: IGymLocation;
     //location.lati = this.gyms[id];
    //  location.longi = 150.8888;
    //  let description = "observable的数据";

  }

  getId(): string {
    let gymID: string;
    this.route.params.subscribe(
      (params: Params) => {
        let id = params['id']
        gymID = id;
      }
    );
    return gymID;
  }

}
