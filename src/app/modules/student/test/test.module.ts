import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { TestComponent } from 'app/modules/student/test/test.component';

const testRoutes: Route[] = [
    {
        path     : '',
        component: TestComponent
    }
];

@NgModule({
    declarations: [
      TestComponent
    ],
    imports     : [
        MatIconModule,
        FuseCardModule,
        RouterModule.forChild(testRoutes)
    ]
})
export class TestModule
{
}
