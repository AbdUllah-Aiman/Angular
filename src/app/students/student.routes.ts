import { Routes } from '@angular/router';
import { StudentComponent } from './allstudent/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

export const studentRoutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: 'details/:id', component: StudentdetailsComponent },
      { path: 'add', component: AddstudentComponent },
      { path: 'edit/:id', component: EditstudentComponent },
    ],
  },
];
