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
 
    this.onLoadStuDetails();

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
    this.stuService.getstudentall().subscribe(ret=>{
      console.log(ret);
      this.oStudentList=ret;
    })

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
 

    this.onRowChangecolor(_stlist.regNo);

  }
  onRowChangecolor(_regNo:Number){
    this.oStudentList.map(x=>x.isSelected=0);
    this.oStudentList.find(x => {
      if(x.regNo == _regNo){
        console.log(x.regNo)
        x.isSelected=1;
      }
    });   
  }
  onClickCreate(){
    this.optionType="Create";
    this.optionStatus = 2;
    this.oStudentds = new StudentList();;
  }



}
