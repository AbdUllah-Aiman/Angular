import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css',
})
export class StudentdetailsComponent implements OnChanges {
  constructor(private service: StudentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.studentdetails = this.service.getById(this.studentid) ?? new Student(0, '', 0);
  }
  
  @Input() studentid: number = 0;
  
  studentdetails: Student = new Student(0, '', 0);
}
