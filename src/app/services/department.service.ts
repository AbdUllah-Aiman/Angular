import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}
  departments: Department[] = [
    new Department(1, 'PD', 49, 'Absheet'),
    new Department(2, 'AI', 21, 'Smart-Village'),
    new Department(3, 'OS', 22, 'Mansoura'),
  ];
  getAll() {
    return this.departments;
  }
  getById(id: number) {
    return this.departments.find((a) => a.id == id);
  }
  generateId() {
    return this.departments[this.departments.length - 1].id + 1;
  }
  addDepartment(newDepart: Department) {
    if(newDepart.name.length <2 || newDepart.studentNo <= 0 || newDepart.Location.length <= 3){
      alert('name must be more than 2 characters, student number must be more than 0, location must be more than 3 characters');
      return 0;
      return;
    }
    this.departments.push(
      new Department(
        this.generateId(),
        newDepart.name,
        newDepart.studentNo,
        newDepart.Location
      )
    );
    return 1;
  }
  dept: Department = new Department(0, '', 0, '');
  Update(editDept: Department) {
    this.dept = this.getById(editDept.id) ?? new Department(0, '', 0, '');
    if(editDept.name.length < 2 || editDept.studentNo <= 0 || editDept.Location.length <= 3){
      alert(`name must be more than 2 characters, student number must be more than 0, location must be more than 3 characters`);
      return 0;
    }
    this.dept.name = editDept.name;
    this.dept.studentNo = editDept.studentNo;
    this.dept.Location = editDept.Location;
    return 1;
  }
  DeleteDept(id: number) {
    if (!confirm('Are you sure you want to delete this Department?')) {
      return;
    }
    this.departments = this.departments.filter((dept) => dept.id !== id);
  }
}
