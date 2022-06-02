import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn:'root'})
export class FormServiceService {
  private baseURL="http://localhost:8082/forms";  
  constructor(private httpClient:HttpClient) { }

  createForm(form:any){
    return this.httpClient.post(`${this.baseURL}`, form);
  }
  getIdBydata(formId:any):any{
    return this.httpClient.get<any>(`${this.baseURL}/${formId}`);
  }
  getall(){
    return this.httpClient.get<any>(`${this.baseURL}`);
  }
}
