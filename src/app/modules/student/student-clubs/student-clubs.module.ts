import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { StudentClubsComponent } from './student-clubs.component';
import { Route, RouterModule } from '@angular/router';
import { CreateStudentClubComponent } from './create-student-club/create-student-club.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

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
    RouterModule.forChild(studentClubRoutes)
  ]
})
export class StudentClubsModule { }
