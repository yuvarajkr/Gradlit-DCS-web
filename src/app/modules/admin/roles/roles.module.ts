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
    }
  ]
}];

@NgModule({
  declarations: [
    RolesComponent,
    AddNewRoleComponent,
    ListRolesComponent,
    EditRolesComponent,
    AddUserToRolesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rolesRoutes),
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
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
export class RolesModule { }
