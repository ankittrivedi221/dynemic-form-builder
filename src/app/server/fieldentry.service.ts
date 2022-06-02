import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn:'root'})
export class FieldentryService {

  constructor(private httpClient:HttpClient) { }

  private baseURL="http://localhost:8082"

  saveTable(formId:any,fieldentryModel:any):any{
    return this.httpClient.post(`${this.baseURL}/form/${formId}/fieldentrys/`,fieldentryModel);
  }

}
