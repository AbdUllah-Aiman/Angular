import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: '**', redirectTo: 'students' },
];
