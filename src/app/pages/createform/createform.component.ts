import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FieldentryService } from 'src/app/server/fieldentry.service';
import { FormServiceService } from 'src/app/server/form-service.service';
import { FormfildserviceService } from 'src/app/server/formfildservice.service';
export class FieldentryModel{
  public fieldentry:any;
}
@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {
formId:any;
formdata:any;
formfield:any;
label = new FormControl("");

columns:any;
formGroup:any = FormGroup;


result:any;
  constructor(
    private filedservice:FormfildserviceService,
    private fentryservice:FieldentryService,
    private _rout:ActivatedRoute, private formBuilder : FormBuilder,
    
    ){}

  ngOnInit(): void {
    this.formId=this._rout.snapshot.params['formid'];
    this.getformfild();
    this.formGroup = this.formBuilder.group({});
  }
  private getformfild(){
    alert(this.formId)
    this.filedservice.getIdFormByFieldIdData(this.formId).subscribe((result: any) => {

      this.columns = result;

      let form: any = {};
      for (let i = 0; i < this.columns.length; i++) {
        form[this.columns[i].label] = new FormControl('');
      }
      this.formGroup = new FormGroup(form);

      // console.log(this.columns);
    });
  }

  submit(){
     
    
    this.fentryservice.saveTable(this.formId,{"fieldentry":this.formGroup.value}).subscribe((result:any)=>{
      // result=this.fieldentry.value;
    })
  }
}
