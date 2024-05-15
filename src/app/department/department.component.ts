import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';
@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [DepartmentService],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {
  mode: string = '';
  departments: Department[] = [];
  constructor(private service: DepartmentService) {
    this.departments = service.getAll();
  }
  newdept: Department = new Department(this.service.generateId(), '', 0, '');
  editdept: Department = new Department(0, '', 0, '');
  deptdetails: Department = new Department(0, '', 0, '');
  cpydept: Department = new Department(0, '', 0, '');

  addDepartment() {
    if (this.mode == 'add' && this.service.addDepartment(this.newdept) == 1) {
      this.newdept = new Department(this.service.generateId(), '', 0, '');
      this.mode = '';
      return;
    }
    this.mode = 'add';
  }
  editDeptufn(id: number) {
    this.mode = 'edit';
    this.cpydept = this.service.getById(id) ?? new Department(0, '', 0, '');
    this.editdept = new Department(
      this.cpydept.id,
      this.cpydept.name,
      this.cpydept.studentNo,
      this.cpydept.Location
    );
  }
  updateDept(f: number) {
    if (this.service.Update(this.editdept) == 1) this.mode = '';
  }
  deletedept(id: number) {
    this.service.DeleteDept(id);
    this.departments = this.service.getAll();
    this.mode = '';
  }

  showDetails(id: number) {
    this.deptdetails = this.service.getById(id) ?? new Department(0, '', 0, '');
  }
}
