import { Routes } from '@angular/router';
import { EditdeptComponent } from './editdept/editdept.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { DeptdetailsComponent } from './deptdetails/deptdetails.component';
import { DepartmentComponent } from './alldepts/department.component';

export const deptRoutes: Routes = [
    {
        path: '',
        component: DepartmentComponent,
        children: [
            { path: 'details/:id', component: DeptdetailsComponent },
            { path: 'add', component: AdddeptComponent },
            { path: 'edit/:id', component: EditdeptComponent },
        ],
    },
];
