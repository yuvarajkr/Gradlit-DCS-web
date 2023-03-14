import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
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
        RouterModule.forChild(testRoutes)
    ]
})
export class TestModule
{
}
