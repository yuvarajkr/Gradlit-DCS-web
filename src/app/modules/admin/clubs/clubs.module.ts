import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubsComponent } from './clubs/clubs.component';
import { Route, RouterModule } from '@angular/router';
import { ListAllClubsComponent } from './list-all-clubs/list-all-clubs.component';
import { EditClubComponent } from './edit-club/edit-club.component';
import { AddNewClubComponent } from './add-new-club/add-new-club.component';
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
import { NgSelectModule } from '@ng-select/ng-select';

const clubsRoutes: Route[] = [{
  path:'', 
  component:ClubsComponent,
  children: [
    {
      path:'list-clubs',
      component: ListAllClubsComponent
    },
    {
      path:'add-new-club',
      component:AddNewClubComponent
    },
    {
      path:'edit-club/:id',
      component:EditClubComponent
    }
  ]
}];



@NgModule({
  declarations: [
    ClubsComponent,
    ListAllClubsComponent,
    EditClubComponent,
    AddNewClubComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clubsRoutes),
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
  ],
  schemas:[NO_ERRORS_SCHEMA], 
})
export class ClubsModule { }
