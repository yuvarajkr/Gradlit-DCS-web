import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { ConnectComponent } from 'app/modules/student/connect/connect.component';
import { PostComponent  } from './posts/post.component';
import { MatSelectModule } from '@angular/material/select';
import { CarouselModule } from 'ngx-owl-carousel-o';

const connectRoutes: Route[] = [
    {
        path     : '',
        component: ConnectComponent
    }
];

@NgModule({
    declarations: [
        ConnectComponent,
        PostComponent,
    ],
    imports     : [
        RouterModule.forChild(connectRoutes),
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatTooltipModule,
        FuseCardModule,
        SharedModule,
        MatDialogModule,
        MatDatepickerModule,
        MatLuxonDateModule,
        MatCheckboxModule,
        MatSelectModule,
        CarouselModule,
    ]
})
export class ConnectModule
{
}
