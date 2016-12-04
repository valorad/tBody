import { Component, OnInit } from '@angular/core';

declare var BMap: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var map = new BMap.Map("divTBMap");          // 创建地图实例  
    var point = new BMap.Point(104.0650, 30.6578);  // 创建点坐标  
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
  }

}
