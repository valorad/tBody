import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  lat: number = 30.6578;
  lng: number = 104.0650;

}
