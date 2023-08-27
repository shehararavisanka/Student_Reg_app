import { Component } from '@angular/core';
import { StudentComDetails, StudentList, StudentListDetail } from 'src/app/Models/studenlist';
import { MststudentService } from 'src/app/Services/mststudent.service';




@Component({
  selector: 'app-mststudent',
  templateUrl: './mststudent.component.html',
  styleUrls: ['./mststudent.component.css']
})
export class MststudentComponent {

  custsearch: string = "";
  oStudentList = new Array<StudentListDetail>();
  oStudentds = new StudentList();
  optionStatus: number = 1;
  optionType: String = "Create";
  currpg=1;
  constructor(public stuService: MststudentService) {
    this.updateInterfacedetails();
  }

  ngOnInit(): void {

    this.oStudentList.push({
      regNo: 1,
      firstName: 'Shehara',
      lastName: 'Ravisanka',
      mobile: '0702263854',
      email: 'sheharavisanka@gmail.com',
      nic: '981461320V',
    })

    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })
    this.oStudentList.push({
      regNo: 2,
      firstName: 'Nuwanthi',
      lastName: 'Jayawickrama',
      mobile: '0702263854',
      email: 'nimesha@gmail.com',
      nic: '98150256320V',
    })

  }

  updateInterfacedetails() {

    this.stuService._studentComdetails$.subscribe((retDataset: StudentComDetails) => {
      if (retDataset.btnclose == 1) {
        this.optionStatus = 1;
      }
      if (retDataset.optionSucess == 1) {
        this.onLoadStuDetails();
      }
    });

  }

  onLoadStuDetails() {

  }



  //this function call when user click the row in the table
  onClickrow(_stlist: StudentList, _optionType: string) {
    this.oStudentds = _stlist;
    this.optionType = _optionType;

    //this conditionuse to show/hide student details window
    if (this.optionStatus == 1) {
      this.optionStatus = 2;
    } else {
      this.optionStatus = 1;
    }

  }
  onClickCreate(){
    this.optionStatus = 2;
    this.oStudentds = new StudentList();;
  }



}
