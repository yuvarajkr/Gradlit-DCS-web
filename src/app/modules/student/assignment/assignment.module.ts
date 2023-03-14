import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AssignmentComponent } from 'app/modules/student/assignment/assignment.component';

const assignmentRoutes: Route[] = [
    {
        path     : '',
        component: AssignmentComponent
    }
];

@NgModule({
    declarations: [
      AssignmentComponent
    ],
    imports     : [
        RouterModule.forChild(assignmentRoutes)
    ]
})
export class AssignmentModule
{
}

