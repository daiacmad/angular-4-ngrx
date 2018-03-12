import { Component, OnInit ,Output , EventEmitter } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-purchase-option',
  templateUrl: './purchase-option.component.html',
  styleUrls: ['./purchase-option.component.scss']
})
export class PurchaseOptionComponent implements OnInit {
  purchaseOptionForm:FormGroup;
  @Output() onSubmited = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  createForm(){
    this.purchaseOptionForm = this.fb.group({
      option: ["",Validators.required],
      phone:this.fb.group({
        digit:[""],
        number:["",Validators.required]
      })
    })
  }

  ngOnInit() {
  }

  onClick(){
    if(this.purchaseOptionForm.valid){
      this.onSubmited.emit({
        data:this.purchaseOptionForm.value,
        status:true
      });
    }
  }

}
