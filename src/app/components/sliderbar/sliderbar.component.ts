import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/server/form-service.service';

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent implements OnInit {
 formdata:any;
  constructor(private formservice:FormServiceService) { }
  panelOpenState = false;
  ngOnInit(): void {
    this.formservice.getall().subscribe((data: any) => {
        this.formdata=data;
      }
    );
  }

}
