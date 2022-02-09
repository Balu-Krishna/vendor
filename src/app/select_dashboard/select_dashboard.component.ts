import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
@Component({
  selector: 'app-select_dashboard',
  templateUrl: './select_dashboard.component.html',
  styleUrls: ['./select_dashboard.component.css']
})
export class Select_dashboardComponent implements OnInit {

  constructor(public router: Router){}

  ngOnInit(): void {
  }

}
