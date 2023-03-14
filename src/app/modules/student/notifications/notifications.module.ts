import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { NotificationsComponent } from 'app/modules/student/notifications/notifications.component';

const notificationsRoutes: Route[] = [
    {
        path     : '',
        component: NotificationsComponent
    }
];

@NgModule({
    declarations: [
        NotificationsComponent
    ],
    imports     : [
        RouterModule.forChild(notificationsRoutes),
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatTooltipModule,
        FuseCardModule,
        SharedModule
    ]
})
export class NotificationsModule
{
}
