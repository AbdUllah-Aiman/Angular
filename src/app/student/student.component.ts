import {
  Component,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  output,
} from '@angular/core';
import { Student } from '../models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { AddstudentComponent } from '../students/addstudent/addstudent.component';
import { StudentdetailsComponent } from '../students/studentdetails/studentdetails.component';
import { EditstudentComponent } from '../students/editstudent/editstudent.component';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AddstudentComponent,
    StudentdetailsComponent,
    EditstudentComponent,
  ],
  providers: [StudentService],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  mode: string = '';
  students: Student[] = [];
  constructor(public service: StudentService) {}
  ngOnInit(): void {
    this.students = this.service.getAll();
  }
  studentid: number = 0;

  editstudent: Student = new Student(0, '', 0);

  cpystd: Student = new Student(0, '', 0);
  addClicked() {
    if (this.mode == 'add') this.mode = '';
    else this.mode = 'add';
  }
  editClicked(id: number) {
    this.mode = 'edit';
    this.changeId(id);
  }
  deletestudent(id: number) {
    this.service.DeleteStudent(id);
    this.students = this.service.getAll();
    this.mode = '';
  }
  changeId(id: number) {
    this.studentid = id;
  }
}
