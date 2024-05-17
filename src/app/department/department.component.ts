import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';
import { AdddeptComponent } from './adddept/adddept.component';
import { DeptdetailsComponent } from './deptdetails/deptdetails.component';
import { EditdeptComponent } from './editdept/editdept.component';
@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule, AdddeptComponent, DeptdetailsComponent,EditdeptComponent],
  providers: [DepartmentService],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  mode: string = '';
  departments: Department[] = [];
  constructor(private service: DepartmentService) {}
  ngOnInit(): void {
    this.departments = this.service.getAll();
  }
  editdept: Department = new Department(0, '', 0, '');
  deptdetails: Department = new Department(0, '', 0, '');
  cpydept: Department = new Department(0, '', 0, '');

  addClicked() {
    if (this.mode == 'add') {
      this.mode = '';
    } else this.mode = 'add';
  }
  // editDeptufn(id: number) {
  //   this.mode = 'edit';
  //   this.cpydept = this.service.getById(id) ?? new Department(0, '', 0, '');
  //   this.editdept = new Department(
  //     this.cpydept.id,
  //     this.cpydept.name,
  //     this.cpydept.studentNo,
  //     this.cpydept.Location
  //   );
  // }
  // updateDept(f: number) {
  //   if (this.service.Update(this.editdept) == 1) this.mode = '';
  // }
  deletedept(id: number) {
    this.service.DeleteDept(id);
    this.departments = this.service.getAll();
    this.mode = '';
  }
  changeId(id: number) {
    this.dept_id = id;
  }
  dept_id: number = 0;
}
