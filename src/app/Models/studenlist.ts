export class StudentList {
  Id:string="";
  regNo: Number = 0;
  firstName: string = '';
  lastName: string = '';
  mobile: string = '';
  email: string = '';
  nic: string = '';
  typ: Number = 0;

}

export class StudentListDetail {
  regNo: Number = 0;
  firstName: string = '';
  lastName: string = '';
  mobile: string = '';
  email: string = '';
  nic: string = '';
  isSelected :Number=0

  constructor(_regNo: Number, _firstName: string, _lastName: string, _mobile: string, _email: string, _nic: string) {
    this.regNo = _regNo
    this.firstName = _firstName
    this.lastName = _lastName
    this.mobile = _mobile
    this.email = _email
    this.nic = _nic

  }

}


export class StudentComDetails {
  btnclose: Number = 0;
  optionSucess: Number = 0;
}