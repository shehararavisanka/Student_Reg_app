import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StudentComDetails } from '../Models/studenlist';

@Injectable({
  providedIn: 'root'
})
export class MststudentService {
  private _studentComdetails = new Subject<StudentComDetails>();
  _studentComdetails$ = this._studentComdetails.asObservable();



  constructor() {
  }



  sendUpdatetoMain = (_studentDet: StudentComDetails) => {
    this._studentComdetails.next(_studentDet);
  }


}
