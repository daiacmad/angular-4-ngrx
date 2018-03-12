import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.scss']
})
export class MultiStepComponent implements OnInit {

  constructor() { }

  model:any = {
    purchaseOption:{},
    configure:{},
    detail:{},
    summary:{}
  }

  step:number;
  ngOnInit() {
    this.step = 1;
  }

  onPurchaseOptionSubmited(submited){
    console.log(submited);
    if(submited.status){
      this.step = 2;
      this.model.purchaseOption = submited.data;
    }
  } 

}
