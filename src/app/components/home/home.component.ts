import { Component, OnInit } from '@angular/core';
import Chart from "chart.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
   
  }
}
