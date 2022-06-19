import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  headers: any
  formDetails: any;
  s_massage: any;
  constructor(private Http: HttpClient) { }
  getHeaders() {
    this.headers = new HttpHeaders();
    this.headers.set('Authorization', 'Bearer key3GnfHvdYoWedr5');
    return this.headers;
  }
  postUser(body: any) {
    return this.Http.post<any>("https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users", body);
  }
  getUser() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer key3GnfHvdYoWedr5');
    return this.Http.get<any>("https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users", { headers: headers });
  }


  formData(form_data:any){
    this.formDetails = form_data
    this.recFormData()
  }

  recFormData(){
  return this.s_massage = this.formDetails
  
  }
}





