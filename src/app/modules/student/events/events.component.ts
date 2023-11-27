import { Component, ViewEncapsulation } from '@angular/core';
import { StudentHttpService } from '../student-utils-services/student-http.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent {
  public dateInstance = new Date();
  public isEventExpanded = false;
  public allEvents: { head: string; name?:string ;description?: string; venue?: string; start_date?: string; end_date?:string,file_url?:string,is_notification?:string;  post_type: string; created_by: { id: string; name: string; }; created_at: string; }[];
  selectedEvent: any;
  /* Constructor*/
  constructor(private _studentUtil:StudentHttpService) {
    // this._studentUtil.getAllEvents().subscribe({
    //   next: (eventLists) =>{
    //     this.allEvents = eventLists;
    //   }
    // });

    this._studentUtil.getAllpost().subscribe({
      next: (allPost) => {
        this.allEvents = allPost.data.rows.filter(eachResult => +eachResult.post_type === 4) ;
      },
      error: (err)=>{
        console.log(err);
      }
    })

    
  }
  public onEventExpanded(eventDetails:any){
    this.selectedEvent = eventDetails;
    this.isEventExpanded = true;
  }
}
