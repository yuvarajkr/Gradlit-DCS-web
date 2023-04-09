import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { Route, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AnnouncementComponent } from './announcement.component';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { MatInputModule } from '@angular/material/input';

const announcementRoutes:Route[] = [{
  path:'',
  component: AnnouncementComponent
}];

@NgModule({
  declarations: [AnnouncementComponent, CreateAnnouncementComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild(announcementRoutes)
  ]
})
export class AnnouncementModule { }
