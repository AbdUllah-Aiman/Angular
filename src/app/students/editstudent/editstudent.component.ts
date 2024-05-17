import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editstudent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editstudent.component.html',
  styleUrl: './editstudent.component.css',
})
export class EditstudentComponent implements OnChanges {
  constructor(private service: StudentService) {}
  editstudent: Student = new Student(0, '', 0);
  cpystd: Student = new Student(0, '', 0);
  @Input() studentid: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.cpystd = this.service.getById(this.studentid) ?? new Student(0, '', 0);
    this.editstudent = new Student(
      this.cpystd.id,
      this.cpystd.name,
      this.cpystd.age
    );
  }
  editStudent() {
    if (this.service.Update(this.editstudent) == 1) {
      return;
    }
  }
}
