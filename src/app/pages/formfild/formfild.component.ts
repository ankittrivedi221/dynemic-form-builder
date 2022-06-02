import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Formfield } from 'src/app/class/formfield';
import { FormServiceService } from 'src/app/server/form-service.service';
import { FormfildserviceService } from 'src/app/server/formfildservice.service';
import { CreateFormDialogComponent } from '../create-form-dialog/create-form-dialog.component';

@Component({
  selector: 'app-formfild',
  templateUrl: './formfild.component.html',
  styleUrls: ['./formfild.component.css']
})


export class FormfildComponent implements OnInit {
boolen!:boolean;
// add form 
public form = {
  formId:'',
  name:'',
  plural:''

};
formfield: Formfield[] = [];
  displayedColumns: string[] = ['fid','label', 'type', 'compulsory', 'Actions'];
  // dataSource = new MatTableDataSource<ColumnData>(this.formfield);
  // dataSource = new MatTableDataSource<ColumnData>(this.formfield);
  dataSource!: MatTableDataSource<Formfield>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  label = new FormControl("");
  type = new FormControl("");
  compulsory = new FormControl("");
  formId: any;

  constructor(
    private formService:FormServiceService,
    public dialog:MatDialog,
    private fieldservice:FormfildserviceService,
  ) { }

  ngOnInit(): void {
    this.getformfild();
    
  }
// add form submit method
AddForm(){
      
}
//add form method
formDataSubmit(){
  console.log(this.form);
      if (this.form.name == '' || this.form.plural == null) {
        //alert('firstname is Required !!'
        return;
      }

      this.formService.createForm(this.form).subscribe(
        (data: any) => {
          //success
          console.log(data);
          // alert('success');
          this.form.name = ''
          this.form.plural = ''
          this.formId=data.formId;
          this.boolen=true;
          //after submit page redirect to list of employee
          //this.router.navigate(['/candidate']);
        },
        (error) => {
          //error
          console.log(error);
          // alert('Something went Wrong!!')
        }
      );
    }

//Open Dialog For create-form
openDialog(): void {
  const dialogRef = this.dialog.open(CreateFormDialogComponent,{
   
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    position:
      {
        top: "236px",
        right: "216px"
      }
     
  });
  
  dialogRef.afterClosed().subscribe((result: ColumnData) => {
    console.log(`Dialog result: ${result}`)
    console.log('The dialog was closed' + result);
    this.fieldservice.createForm(this.formId,result)
      .subscribe((result: any) => {


        this.formfield.push(result)
        // this.dataSource = new MatTableDataSource<ColumnData>(this.formfield);
        this.dataSource = new MatTableDataSource(this.formfield);
        console.log(result);
          //Set Paginator
          this.dataSource.paginator = this.paginator;

          //Set Sort
          

          console.log(this.dataSource)
        },
        (error) => {
          console.log(error);
        }
      );

    
  });
}
private getformfild(){
  this.formService.getIdBydata(this.formId)
  .subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.formField);
      console.log(data.formField)
        // this.totalCount = data.totalElements;

      // Set Paginator
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource)
      //show 
      this.formfield=data.formField;

      // //Set Sort
      // this.dataSource.sort = this.sort;
      // console.log(this.dataSource)
      this.paginator;
    },
   
  );
}

/*  addRow() {
  const newRow = {"label": "", "type": "", "compulsory": ""}
  this.dataSource = [...this.dataSource, newRow];
}*/
}


//dummy data
export interface ColumnData {
label: string;
type: any;
compulsory: boolean;
}

const ELEMENT_DATA: ColumnData[] = [
{label: 'firstname', type: 'text-field', compulsory: true},
{label: 'lastname', type: 'text-field', compulsory: true},
{label: 'email', type: 'email', compulsory: false},
{label: 'mobile', type: 'number', compulsory: false},
{label: 'designation', type: 'text-field', compulsory: false},

];

