import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { StudentdetailsComponent } from './students/studentdetails/studentdetails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: '**', component: NotFoundComponent },
];
