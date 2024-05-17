import {
  Component,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  output,
} from '@angular/core';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { AddstudentComponent } from '../addstudent/addstudent.component';
import { EditstudentComponent } from '../editstudent/editstudent.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  providers: [StudentService],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  constructor(public service: StudentService, private router: Router) {}
  ngOnInit(): void {
    this.students = this.service.getAll();
  }
  studentid: number = 0;

  editstudent: Student = new Student(0, '', 0);

  cpystd: Student = new Student(0, '', 0);

  deletestudent(id: number) {
    this.service.DeleteStudent(id);
    this.students = this.service.getAll();
    this.router.navigate(['/students']);
  }
}
