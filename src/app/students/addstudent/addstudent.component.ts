import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css',
})
export class AddstudentComponent {
  constructor(public service: StudentService) {}
  newstudent: Student = new Student(this.service.generateId(), '', 0);
  addStudent() {
    if (this.service.addStudent(this.newstudent) == 1) {
      this.newstudent = new Student(this.service.generateId(), '', 0);
      return;
    }
  }
}
