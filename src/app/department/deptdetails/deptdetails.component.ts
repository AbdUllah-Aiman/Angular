import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deptdetails',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './deptdetails.component.html',
  styleUrl: './deptdetails.component.css'
})
export class DeptdetailsComponent implements OnChanges{
  constructor(private service: DepartmentService) {}
    
  @Input() deptid: number = 0;
  
  deptdetails: Department = new Department(0, '', 0,'');

  ngOnChanges(changes: SimpleChanges): void {
    this.deptdetails = this.service.getById(this.deptid) ?? new Department(0, '', 0,'');
  }
}
