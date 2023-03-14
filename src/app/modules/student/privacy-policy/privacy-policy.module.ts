import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PrivacyPolicyComponent } from 'app/modules/student/privacy-policy/privacy-policy.component';

const privacyPolicyRoutes: Route[] = [
    {
        path     : '',
        component: PrivacyPolicyComponent
    }
];

@NgModule({
    declarations: [
      PrivacyPolicyComponent
    ],
    imports     : [
        RouterModule.forChild(privacyPolicyRoutes),
        MatIconModule,
    ]
})
export class PrivacyPolicyModule
{
}


