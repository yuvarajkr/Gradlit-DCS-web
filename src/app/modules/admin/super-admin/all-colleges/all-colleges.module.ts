import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllCollegesComponent } from './list-all-colleges/list-all-colleges.component';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddNewCollegeComponent } from './add-new-college/add-new-college.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';

const SuperAdminCollegeRoutes: Route[] = [{
  path:'', 
  component:ListAllCollegesComponent,
},{
  path:'add-new-college',
  component: AddNewCollegeComponent
}];

@NgModule({
  declarations: [
    ListAllCollegesComponent,
    AddNewCollegeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SuperAdminCollegeRoutes),
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
export class AllCollegesModule { }
