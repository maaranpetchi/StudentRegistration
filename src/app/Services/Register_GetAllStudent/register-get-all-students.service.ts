import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterGetAllStudentsService {

  constructor(private http:HttpClient) {

   }


   registerStudent(payload:any): Observable<any>{
    return this.http.post(environment.apiURL+'Student', payload)
   }
   getAllStdents(): Observable<any> {
    return this.http.get(environment.apiURL+`Student`);
  }
}
