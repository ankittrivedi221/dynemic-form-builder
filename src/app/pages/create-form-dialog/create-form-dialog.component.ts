import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateformComponent } from '../createform/createform.component';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { FormServiceService } from 'src/app/server/form-service.service';



export class ColumnData {
  constructor(
    public label: string,
    public type: any,
    public compulsory: boolean,
  ){
  }
};
@Component({
  selector: 'app-create-form-dialog',
  templateUrl: './create-form-dialog.component.html',
  styleUrls: ['./create-form-dialog.component.css']
})
export class CreateFormDialogComponent implements OnInit {
  label=new FormControl('');
  type=new FormControl('');
  compulsory=new FormControl('');
  formid!:number;
  formdata:any;
  constructor(private reference: MatDialogRef<CreateformComponent>,private formService:FormServiceService,) { }
  add: ColumnData | undefined;
  ngOnInit(): void {

  }


  addRow() {
    this.add = new ColumnData(
      this.label.value,
      this.type.value,
      this.compulsory.value,
    )
    console.log(this.add)
    this.reference.close(this.add);
  }


}
