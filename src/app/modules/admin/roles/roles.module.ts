import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { Route, RouterModule } from '@angular/router';
import { AddNewRoleComponent } from './add-new-role/add-new-role.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EditRolesComponent } from './edit-roles/edit-roles.component';
import { AddUserToRolesComponent } from './add-user-to-roles/add-user-to-roles.component';
import { RoleNotificationComponent } from './role-notification/role-notification.component';
import { EditUserInARoleComponent } from './edit-user-in-a-role/edit-user-in-a-role.component';
import { NgSelectModule } from '@ng-select/ng-select';

const rolesRoutes: Route[] = [{
  path:'', 
  component:RolesComponent,
  children: [
    {
      path:'list-roles',
      component:ListRolesComponent
    },
    {
      path:'add-roles',
      component:AddNewRoleComponent
    },
    {
      path:'edit-roles/:id',
      component:EditRolesComponent
    },
    {
      path:'add-users-to-role/:id',
      component:AddUserToRolesComponent
    },
    {
      path:'edit-user/:id/:name',
      component:EditUserInARoleComponent
    }
  ]
}];

@NgModule({
  declarations: [
    RolesComponent,
    AddNewRoleComponent,
    ListRolesComponent,
    EditRolesComponent,
    AddUserToRolesComponent,
    RoleNotificationComponent,
    EditUserInARoleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rolesRoutes),
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
    NgSelectModule
  ]
})
export class RolesModule { }
