import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SupportComponent } from 'app/modules/student/support/support.component';
import { MatIconModule } from '@angular/material/icon';

const supportRoutes: Route[] = [
    {
        path     : '',
        component: SupportComponent
    }
];

@NgModule({
    declarations: [
      SupportComponent,
    ],
    imports     : [
        RouterModule.forChild(supportRoutes),
        MatIconModule,
    ]
})
export class SupportModule
{
}



