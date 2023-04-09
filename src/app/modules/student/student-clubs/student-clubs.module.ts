import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { StudentClubsComponent } from './student-clubs.component';
import { Route, RouterModule } from '@angular/router';
import { CreateStudentClubComponent } from './create-student-club/create-student-club.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

const studentClubRoutes:Route[] = [{
  path:'',
  component: StudentClubsComponent
}];

@NgModule({
  declarations: [StudentClubsComponent, CreateStudentClubComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule.forChild(studentClubRoutes)
  ]
})
export class StudentClubsModule { }
