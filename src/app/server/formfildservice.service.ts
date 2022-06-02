import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn:'root'})
export class FormfildserviceService {

  private baseURL="http://localhost:8082";  
  constructor(private httpClient:HttpClient) { }

  createForm(formid:any,form:any){
    return this.httpClient.post(`${this.baseURL}/form/${formid}/fields/`, form);
  }
  getIdFormByFieldIdData(formid:any){
    return this.httpClient.get(`${this.baseURL}/form/${formid}/fields/`);
  }
}
