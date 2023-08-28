import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StudentComDetails, StudentList, StudentListDetail } from '../Models/studenlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MststudentService {
  private _studentComdetails = new Subject<StudentComDetails>();
  _studentComdetails$ = this._studentComdetails.asObservable();


  constructor(private http: HttpClient) {
  }



  sendUpdatetoMain = (_studentDet: StudentComDetails) => {
    this._studentComdetails.next(_studentDet);
  }

  createstudent(data: StudentList) {
    return this.http.post('/api/values', data);

  }

  deletestudent(data: StudentList) {
    return this.http.post('/api/values' ,data);

  }
  getstudentall() {
    
    return this.http.get<StudentListDetail[]>('api/values' );
  }
}
