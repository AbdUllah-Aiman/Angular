import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studentdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css',
})
export class StudentdetailsComponent implements OnInit, OnDestroy {
  constructor(
    private service: StudentService,
    private activatedRoute: ActivatedRoute
  ) {}
  studentdetails: Student | null = null;

  sub: Subscription | null = null;
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.studentdetails = this.service.getById(params['id']) ?? null;
    });
  }
}
