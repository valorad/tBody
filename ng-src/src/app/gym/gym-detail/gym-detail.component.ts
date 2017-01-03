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
  public gyms = []; //所有健身房的数据
  public error: string;
  public gym = null; //这个健身房的数据
  constructor(private route: ActivatedRoute, router: Router, private gymService: GymService) {   }

  ngOnInit() {
     this.id = this.getId();
     //subscribe一下gymserice，然后选择一下得到数据
     this.gymService.getGymList().subscribe(
       (resGyms) => {
         this.gyms = resGyms;
         this.gym = this.findData(this.id, this.gyms);
        },
       (resError) => this.error = resError
     );
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

  findData(id: string, gyms: any): any {
     for (let gym in gyms) {
       if (gyms[gym]["id"] == id) {
         return gyms[gym];
       }
     }
     return null;
  }
}
