import { Component } from '@angular/core';
import { Student } from '../models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [StudentService],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  mode: string = '';
  students: Student[] = [];
  constructor(public service: StudentService) {
    this.students = service.getAll();
  }

  newstudent: Student = new Student(this.service.generateId(), '', 0);
  editstudent: Student = new Student(0, '', 0);
  studentdetails: Student = new Student(0, '', 0);

  cpystd: Student = new Student(0, '', 0);
  addStudent() {
    if (this.mode == 'add' && this.service.addStudent(this.newstudent) == 1) {
      this.mode = '';
      this.newstudent = new Student(this.service.generateId(), '', 0);
      return;
    }
    this.mode = 'add';
  }
  editClicked(id: number) {
    this.mode = 'edit';
    this.cpystd = this.service.getById(id) ?? new Student(0, '', 0);
    this.editstudent = new Student(
      this.cpystd.id,
      this.cpystd.name,
      this.cpystd.age
    );
  }
  updateStudent() {
    if (this.service.Update(this.editstudent) == 1) this.mode = '';
  }
  deletestudent(id: number) {
    this.service.DeleteStudent(id);
    this.students = this.service.getAll();
    this.mode = '';
  }
  showDetails(id: number) {
    this.studentdetails = this.service.getById(id) ?? new Student(0, '', 0);
  }
}
