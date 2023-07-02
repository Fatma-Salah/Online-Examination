import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private httpoptions
 
   constructor(private httpclient:HttpClient) { 
 
     this.httpoptions={
       headers:new HttpHeaders({
         'Content-Type':'application/json'
       })
     }
   }
   getalluser(): Observable<any>{
     return this.httpclient.get<any>(`${environment.APIURL}/users`);
   }}
