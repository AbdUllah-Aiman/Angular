import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editdept',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editdept.component.html',
  styleUrl: './editdept.component.css',
})
export class EditdeptComponent implements OnInit, OnDestroy {
  constructor(
    private service: DepartmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cpydept = this.service.getById(params['id']) ?? null;
      if (this.cpydept != null)
        this.editdept = new Department(
          this.cpydept.id,
          this.cpydept.name,
          this.cpydept.studentNo,
          this.cpydept.Location
        );
    });
  }
  editdept: Department | null = null;
  cpydept: Department | null = null;

  sub: Subscription | null = null;
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  editDept() {
    if (
      this.service.Update(this.editdept ?? new Department(0, '', 0, '')) == 1
    ) {
      this.router.navigate(['/departments']);
      return;
    }
  }
}
