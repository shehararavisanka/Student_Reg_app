import { Component } from '@angular/core'; 
import { StudentList } from 'src/app/Models/studenlist';




@Component({
  selector: 'app-mststudent',
  templateUrl: './mststudent.component.html',
  styleUrls: ['./mststudent.component.css']
})
export class MststudentComponent {

  custsearch:string="";
  oStudentList:any=[];
  oStudentds=new StudentList();
  optionStatus:number=1;


  constructor(){

  }
  
  ngOnInit(): void {

    this.oStudentList.push({
      regNo: 1,
      firstName:  'Shehara',
      lastName:  'Ravisanka',
      mobile:  '0702263854',
      email:  'sheharavisanka@gmail.com',
      nic:  '981461320V',
    })

    this.oStudentList.push({
      regNo: 2,
      firstName:  'Nuwanthi',
      lastName:  'Jayawickrama',
      mobile:  '0702263854',
      email:  'nimesha@gmail.com',
      nic:  '98150256320V',
    })

  }


 

//this function call when user click the row in the table
onClickrow(stlist:any){
  if(this.optionStatus==1){
      this.optionStatus=2;
  }else{
    this.optionStatus=1;
  }

}


}
