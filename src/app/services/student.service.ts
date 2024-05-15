import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { max } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  students: Student[] = [
    new Student(1, 'Abdullah', 20),
    new Student(2, 'Layan', 22),
    new Student(3, 'Eslam', 24),
  ];
  getAll() {
    return this.students;
  }
  getById(id: number) {
    return this.students.find((a) => a.id == id);
  }
  generateId() {
    return this.students[this.students.length - 1].id + 1;
  }
  addStudent(newstudent: Student) {
    if (newstudent.name.length <= 2 || newstudent.age <= 6) {
      alert('name must be more than 2 characters, age must be more than 6');
      return 0;
    }
    this.students.push(
      new Student(this.generateId(), newstudent.name, newstudent.age)
    );
    return 1;
  }
  std: Student = new Student(0, '', 0);
  Update(editStudent: Student) {
    this.std = this.getById(editStudent.id) ?? new Student(0, '', 0);
    if (editStudent.name.length <= 2 || editStudent.age <= 6) {
      alert('name must be more than 2 characters, age must be more than 6');
      return 0;
    }
    this.std.name = editStudent.name;
    this.std.age = editStudent.age;
    return 1;
  }
  DeleteStudent(id: number) {
    if (!confirm('Are you sure you want to delete this student?')) {
      return;
    }
    this.students = this.students.filter((student) => student.id !== id);
  }
}
