import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { TruncatePipe } from 'app/core/pipes/truncate.pipe';

const eventsRoutes: Route[] = [
  {
      path     : '',
      component: EventsComponent
  }
];

@NgModule({
  declarations: [
    EventsComponent,
    TruncatePipe
  ],
  imports     : [
      RouterModule.forChild(eventsRoutes),
      MatIconModule,
      FuseCardModule,
  ]
})

export class EventsModule {

}
