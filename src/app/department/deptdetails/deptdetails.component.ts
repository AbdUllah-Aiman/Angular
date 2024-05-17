import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deptdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deptdetails.component.html',
  styleUrl: './deptdetails.component.css',
})
export class DeptdetailsComponent implements OnInit, OnDestroy {
  constructor(
    private service: DepartmentService,
    private activatedRoute: ActivatedRoute
  ) {}
  deptdetails: Department | null = null;

  sub: Subscription | null = null;
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.deptdetails = this.service.getById(params['id']) ?? null;
    });
  }
}
