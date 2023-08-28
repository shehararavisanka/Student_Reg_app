import { Component, Input, OnInit } from '@angular/core';
import { StudentComDetails, StudentList, StudentListDetail } from 'src/app/Models/studenlist';
import { MststudentService } from 'src/app/Services/mststudent.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  @Input() public oStudentds: any;
  @Input() public btnOption: any;

  optionStatus: number = 1;

  constructor(public stuService: MststudentService) {

  }

  ngOnInit(): void {

  }

  onClickoption() {

    if (this.btnOption == 'View') {
      return;
    } else if (this.btnOption == 'Update') {
      this.oStudentds.typ = 1;
    } else if (this.btnOption == 'Delete') {
      this.oStudentds.typ = 2;
    }

    if (this.oStudentds.firstName.length == 0) {
      alert('First Name Cannot Empty')

    } else if (this.oStudentds.lastName.length == 0) {
      alert('Last Name Cannot Empty')

    } else if (this.oStudentds.mobile.length == 0 || this.oStudentds.mobile.length > 12  ) {
      alert('Mobile Number Cannot Empty')
    } else if (this.oStudentds.email.length == 0 || this.emailValidation(this.oStudentds.email)) {
      alert('Email address Cannot Empty')
    } else if (this.oStudentds.nic.length == 0 || this.oStudentds.nic.length > 12) {
      alert('Nic Cannot Empty')
    } else {

      //send request to the database here
      //use create=>this.oStudentds.typ=1
      //update=>this.oStudentds.typ=2
      //delete=>this.oStudentds.typ=3
      if(this.oStudentds.typ == 2){
        this.stuService.deletestudent(this.oStudentds).subscribe((result) => {
          if (result == "Data set Inserted") {
            var dataset = new StudentComDetails();
            dataset.btnclose = 1;
            dataset.optionSucess = 1; 
  
  
            this.stuService.sendUpdatetoMain(dataset);
          } else {
            alert('Student not Deleted!')
          }
  
        });
      }else{
        this.stuService.createstudent(this.oStudentds).subscribe((result) => {
        if (result == "Data set Inserted") {
          var dataset = new StudentComDetails();
          dataset.btnclose = 1;
          dataset.optionSucess = 1; 


          this.stuService.sendUpdatetoMain(dataset);
        } else {
          alert('Student not Created!')
        }

      });
      }

      





    }



  }

  //this function use to validate email address
  emailValidation(value: string) {

    const pattern = /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

    if (!value.match(pattern)) {
      return { email: true };
    }
    return false;

  }
  //send update to main component using this service file
  onClickclose() {
    var dataset = new StudentComDetails();
    dataset.btnclose = 1;
    this.stuService.sendUpdatetoMain(dataset);
  }


}
