import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],
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
  deletedept(id: number) {
    this.service.DeleteDept(id);
    this.departments = this.service.getAll();
    this.mode = '';
  }
}
