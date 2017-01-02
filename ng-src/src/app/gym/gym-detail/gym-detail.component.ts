import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

interface IGymLocation {
  lati: number;
  longi: number;
}

@Component({
  selector: 'app-gym-detail',
  templateUrl: './gym-detail.component.html',
  styleUrls: ['./gym-detail.component.scss']
})
export class GymDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router) { }

  ngOnInit() {
     let id = this.getId();
     //subscribe一下gymserice，然后选择一下得到数据
     let location: IGymLocation;
    //  location.lati = 30.111;
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
