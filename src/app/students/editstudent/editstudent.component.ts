import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editstudent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editstudent.component.html',
  styleUrl: './editstudent.component.css',
})
export class EditstudentComponent implements OnInit, OnDestroy {
  constructor(
    private service: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  editstudent: Student = new Student(0, '', 0);
  cpystd: Student = new Student(0, '', 0);

  sub: Subscription | null = null;
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.cpystd = this.service.getById(params['id']) ?? new Student(0, '', 0);
      this.editstudent = new Student(
        this.cpystd.id,
        this.cpystd.name,
        this.cpystd.age
      );
    });
  }
  editStudent() {
    if (this.service.Update(this.editstudent) == 1) {
      this.router.navigate(['/students']);
      return;
    }
  }
}
