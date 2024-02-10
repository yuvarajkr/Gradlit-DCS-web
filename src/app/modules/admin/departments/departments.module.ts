import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewDepartmentComponent } from './add-new-department/add-new-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeparmentsComponent } from './deparments/deparments.component';
import { DepartmentNotificationComponent } from './department-notification/department-notification.component';

const departmentsRoutes: Route[] = [{
  path:'', 
  component:DeparmentsComponent,
  children: [
    {
      path:'list-departments',
      component:ListDepartmentComponent
    },
    {
      path:'add-department',
      component:AddNewDepartmentComponent
    },
    {
      path:'edit-department/:id',
      component:EditDepartmentComponent
    }
  ]
}];


@NgModule({
  declarations: [
    AddNewDepartmentComponent,
    ListDepartmentComponent,
    EditDepartmentComponent,
    DeparmentsComponent,
    DepartmentNotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(departmentsRoutes),
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatTooltipModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ]
})
export class DepartmentsModule { }
