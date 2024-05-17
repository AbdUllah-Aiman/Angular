import { Routes } from '@angular/router';
import { StudentComponent } from './students/allstudent/student.component';
import { DepartmentComponent } from './department/alldepts/department.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { StudentdetailsComponent } from './students/studentdetails/studentdetails.component';
import { AddstudentComponent } from './students/addstudent/addstudent.component';
import { EditstudentComponent } from './students/editstudent/editstudent.component';
import { DeptdetailsComponent } from './department/deptdetails/deptdetails.component';
import { AdddeptComponent } from './department/adddept/adddept.component';
import { EditdeptComponent } from './department/editdept/editdept.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { canLoginGuard } from './guards/can-login.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/student.routes').then((a) => a.studentRoutes),
    canActivate: [canLoginGuard],
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./department/department.routes').then((a) => a.deptRoutes),
    canActivate: [canLoginGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
