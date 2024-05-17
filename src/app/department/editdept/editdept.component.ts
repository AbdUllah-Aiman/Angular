import { Component, Input, SimpleChanges } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editdept',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './editdept.component.html',
  styleUrl: './editdept.component.css',
})
export class EditdeptComponent {
  constructor(private service: DepartmentService) {}
  editdept: Department = new Department(0, '', 0, '');
  cpydept: Department = new Department(0, '', 0, '');
  @Input() deptid: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.cpydept =
      this.service.getById(this.deptid) ?? new Department(0, '', 0, '');
    this.editdept = new Department(
      this.cpydept.id,
      this.cpydept.name,
      this.cpydept.studentNo,
      this.cpydept.Location
    );
  }
  editDept() {
    if (this.service.Update(this.editdept) == 1) {
      return;
    }
  }
}
