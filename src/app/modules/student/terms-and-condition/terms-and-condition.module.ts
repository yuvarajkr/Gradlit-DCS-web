import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TermsAndConditionComponent } from './terms-and-condition.component';

const privacyPolicyRoutes: Route[] = [
    {
        path     : '',
        component: TermsAndConditionComponent
    }
];

@NgModule({
    declarations: [
        TermsAndConditionComponent
    ],
    imports     : [
        RouterModule.forChild(privacyPolicyRoutes),
        MatIconModule,
    ]
})
export class TermsAndConditionModule
{
}


