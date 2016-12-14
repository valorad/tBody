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
  	this.adjustMap();
  }
  lat: number = 30.6578;
  lng: number = 104.0650;

  adjustMap() {
    // 调整地图大小
    let screenY: number = $(window).height();

	$(function() {
		$(".sebm-google-map-container").css("height", screenY - 45 - 54);
	});

    
    $(window).resize(function() {
      screenY = $(window).height();
      $(".sebm-google-map-container").css("height", screenY - 45 - 54);
    });
  }

}
