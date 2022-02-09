import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {

  constructor() { }
  step = 0;
  panelOpenState = false;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() { 
    this.step++;
  }
 
  prevStep() {
    this.step--;
  }
  ngOnInit(): void {
  }

}
