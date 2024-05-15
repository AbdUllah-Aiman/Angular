export class Department {
  id: number = -1;
  name: string = '';
  studentNo: number = 0;
  Location: string = '';   

  constructor(_id: number, _name: string, _studentNo: number,location: string) {
    this.id = _id;
    this.name = _name;
    this.studentNo = _studentNo;
    this.Location = location;
  }
}   
