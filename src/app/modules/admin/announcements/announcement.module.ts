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
import { MatSelectModule } from '@angular/material/select';
import { DetailsComponent } from './details/details.component';
import { MatButtonModule } from '@angular/material/button';

const announcementRoutes:Route[] = [{
  path:'',
  component: AnnouncementComponent
}];

@NgModule({
  declarations: [AnnouncementComponent, CreateAnnouncementComponent,DetailsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forChild(announcementRoutes)
  ]
})
export class AnnouncementModule { }
