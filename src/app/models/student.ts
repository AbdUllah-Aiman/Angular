export class Student {
  id: number = -1;
  name: string = '';
  age: number = 0;
  constructor(_id: number, _name: string, _age: number) {
    this.id = _id;
    this.name = _name;
    this.age = _age;
  }
}
