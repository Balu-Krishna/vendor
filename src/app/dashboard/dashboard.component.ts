import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Monthly:any[]=[]
 
  constructor() { }

  ngOnInit(): void {
    this.Monthly =[{
      lable:"January",
      value:"January"
    },
    {
      lable:"February",
      value:"February"
    },
    {
      lable:"March",
      value:"March"
    } ,
     {
      lable:"April",
      value:"April"
    },
    {
      lable:"May",
      value:"May"
    },
    {
      lable:"June",
      value:"June"
    },
    {
      lable:"July",
      value:"July"
    },
  ]
  }

  barChartOptions: ChartOptions = {
    responsive: true,
     
   // scales: {
     // yAxes: [
       // {
         // barThickness: 10,
     //   }
      //]
    
  //},
    
  };
  barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Aug','Sep', 'Oct', 'Nov', 'Dec'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  barChartColors: Color[] = [

    { 
      backgroundColor: '#ecaba0',
      borderColor: '#ecaba0',
    }
  ];
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33], label: '' }
  ];
 
}
