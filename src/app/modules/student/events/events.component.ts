import { Component, ViewEncapsulation } from '@angular/core';
import { StudentHttpService } from '../student-utils-services/student-http.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent {
  public dateInstance = new Date();
  public allEvents: { head: string; name?:string ;description?: string; venue?: string; start_date?: string; end_date?:string,file_url?:string,is_notification?:string;  type: string; created_by: { id: string; name: string; }; created_at: string; }[];
  /* Constructor*/
  constructor(private _studentUtil:StudentHttpService) {
    // this._studentUtil.getAllEvents().subscribe({
    //   next: (eventLists) =>{
    //     this.allEvents = eventLists;
    //   }
    // });

    this._studentUtil.getAllpost().subscribe({
      next: (allPost) => {
        this.allEvents = allPost.data.results.filter(eachResult => +eachResult.type === 4) ;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
