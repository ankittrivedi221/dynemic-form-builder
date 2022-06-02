import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute} from '@angular/router';

import { FormServiceService } from 'src/app/server/form-service.service';
import { FormfildserviceService } from 'src/app/server/formfildservice.service';
import { CreateformComponent } from '../createform/createform.component';


export interface ColumnData {
  label: string;
  type: any;
  compulsory: boolean;
}


@Component({
  selector: 'app-formbuildfield',
  templateUrl: './formbuildfield.component.html',
  styleUrls: ['./formbuildfield.component.css']
})
export class FormbuildfieldComponent implements OnInit {

  displayedColumns: string[] = [];
  formdata:any;
  formId: any;
  formfield!:string
  TableColumn_data:any;
  //displayedColumns!: string[] ;

  dataSource = new MatTableDataSource<ColumnData>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() columns!: Array<ColumnData>;
  @Input() dataset: Array<any> = [];
  constructor(
    private formService:FormServiceService,
    private filedservice:FormfildserviceService,
    private _rout:ActivatedRoute,
    public dialog:MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    
  ) {
    
   }

  ngOnInit(): void {
  
    this.formId=this._rout.snapshot.params['formId'];
    alert(this.formId);
    console.log(this.formId);
    this.getformfild();

        this.formService.getall().subscribe((data: any) => {
          this.formdata=data;
        });

      this.formService.getIdBydata(this.formId).subscribe((data: any) => {
        this.formdata=data;
      });
  }

  //sort
   //Sort Validation
   announceSortChange(sortState:Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

 /// set lable   in table heding 
  private getformfild(){
    alert(this.formId)
    this.filedservice.getIdFormByFieldIdData(this.formId)
    .subscribe((data: any) => {
        // this.dataSource = new MatTableDataSource(data.formField);
        // console.log(data)
        // this.totalCount = data.totalElements;
        this.columns=data;
  
        // Set Paginator
        this.columns.forEach(column =>{
          this.displayedColumns.push(column.label);
          console.log(this.displayedColumns) 
        })
       
        this.dataSource.paginator = this.paginator;
        // console.log(this.dataSource)
        // show 
        this.paginator;
      },
     
    );
  }


  //dailopg work

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        formId: this.formId,
        formfield:this.formfield
        
    };

    this.dialog.open(CreateformComponent, dialogConfig);
    
    const dialogRef = this.dialog.open(CreateformComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
}
    // const dialogRef = this.dialog.open(CreateformComponent,{
     
    //   disableClose: false,
    //   hasBackdrop: true,
    //   backdropClass: '',
    //   position:
    //     {
    //       top: "236px",
    //       right: "216px"
    //     }
       
    // });
    
    // dialogRef.afterClosed().subscribe((result: ColumnData) => {
    //   console.log(`Dialog result: ${result}`)
    //   console.log('The dialog was closed' + result);
      // this.fieldservice.createForm(this.formId,result)
      //   .subscribe((result: any) => {
  
  
      //     this.formfield.push(result)
      //     // this.dataSource = new MatTableDataSource<ColumnData>(this.formfield);
      //     this.dataSource = new MatTableDataSource(this.formfield);
      //     console.log(result);
      //       //Set Paginator
      //       this.dataSource.paginator = this.paginator;
  
      //       //Set Sort
            
  
      //       console.log(this.dataSource)
      //     },
      //     (error) => {
      //       console.log(error);
      //     }
      //   );
  
      
  //});
  //}



}

const ELEMENT_DATA: ColumnData[] = [
  {label: 'firstname', type: 'text-field', compulsory: true},
  {label: 'lastname', type: 'text-field', compulsory: true},
  {label: 'email', type: 'email', compulsory: false},
  {label: 'mobile', type: 'number', compulsory: false},
  {label: 'designation', type: 'text-field', compulsory: false},
];