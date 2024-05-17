import { Component } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adddept',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adddept.component.html',
  styleUrl: './adddept.component.css',
})
export class AdddeptComponent {
  constructor(public service: DepartmentService) {}
  newdept: Department = new Department(this.service.generateId(), '', 0, '');
  addDepartment() {
    if (this.service.addDepartment(this.newdept) == 1) {
      this.newdept = new Department(this.service.generateId(), '', 0, '');
      return;
    }
  }
}
