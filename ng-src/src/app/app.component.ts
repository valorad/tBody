import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tBody';

  ngOnInit() {
    this.adjustWindows();
  }

  adjustWindows() {
    // 调整窗口大小
    let screenY: number = $(window).height();

    $(function() {
      $("main").css("height", screenY - 45 - 54);
    });

    
    $(window).resize(function() {
      screenY = $(window).height();
      $("main").css("height", screenY - 45 - 54);
    });
  }

}
