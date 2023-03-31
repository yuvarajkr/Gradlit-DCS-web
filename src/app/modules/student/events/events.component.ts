import { Component, ViewEncapsulation } from '@angular/core';
import { StudentHttpService } from '../student-utils-services/student-http.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent {
  public allEvents: {eventDetails:string, date: string; time: string; location: string; }[];
  /* Constructor*/
  constructor(private _studentUtil:StudentHttpService) {
    this._studentUtil.getAllEvents().subscribe({
      next: (eventLists) =>{
        this.allEvents = eventLists;
      }
    });
  }
}
