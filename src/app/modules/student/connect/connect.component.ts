import { OwlOptions } from 'ngx-owl-carousel-o';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from 'app/modules/student/connect/posts/post.component';
import { StudentHttpService } from '../student-utils-services/student-http.service';
import { StudentDataService } from '../student-utils-services/student-data.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector     : 'connect',
    templateUrl  : './connect.component.html',
    styleUrls    : ['./connect.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectComponent implements OnInit
{
  // Owlcarousel options
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    margin:10,
    dots: true,
    navSpeed: 700,
    navText: ['', 'Next'],
    autoWidth:true,
    responsiveRefreshRate:10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  public allPosts : {
    head: string;
    post_type: string;
    created_by: {
        id: string;
        name: string;
    };
    created_at: string;
}[]; 
  public latestAnnoucement = [];
  public top4Clubs =  [];
  allAnnouncement: any[];
  /* Constructor*/
  constructor(
     private _matDialog: MatDialog, private _studentUtils: StudentHttpService,private ref: ChangeDetectorRef, private _studentData:StudentDataService,private _router:Router
    ) {
  }

  ngOnInit(){
      this._studentData.onPostsChange.subscribe({
        next: (updatedPosts) => {
         // this.allPosts = updatedPosts;
        },
        error: (err) => {
          console.log(err);
        }
      });

      this._studentUtils.getAllpost().subscribe({
        next: (allPosts) => {
          this.allPosts = allPosts.data.rows;
          this.ref.detectChanges();
        },
        error: (err) => {
          console.log(err);
        }
      });

      this._studentUtils.getAllCircualrs().subscribe({
        next: (allAnnouncement) => {
          this.latestAnnoucement = allAnnouncement.data.rows.length <= 3 ? allAnnouncement.data.results:  allAnnouncement.data.rows.slice(0,4);
          this.ref.detectChanges();
        },
        error: (err) => {
          console.log(err);
        }
      })

      this._studentUtils.getAllClub().subscribe({
        next: (allClubs) => {
          this.top4Clubs = allClubs.data.rows;
          this.top4Clubs = this.top4Clubs.length > 4 ? this.top4Clubs.slice(0,4) : this.top4Clubs;
          this.ref.detectChanges();
        },
        error: (err) => {
          console.log(err);
        }
      });
      // this._studentUtils.getAllAnnouncements().subscribe({
      //   next: (allAnnouncementDetails)=>{
      //     this.allAnnouncement = allAnnouncementDetails.data.results.length <= 4 ? allAnnouncementDetails.data.results : allAnnouncementDetails.data.results.slice(0,4);
      //     this.ref.detectChanges();
      //   }
      // });
  }

  onPostLike(postDetails){
    postDetails.is_liked = !(postDetails?.is_liked);
  }

  /* Open the note dialog*/
  addNewPost(): void
  {
    const dialogRef =  this._matDialog.open(PostComponent, {
      autoFocus: false,
      maxHeight: '90vh',
      data     : {
          note: {}
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }

  public onViewAllAnnouncement(){
    this._router.navigate(['student/announcement'],{queryParams: {circular: 'announcement'}});
  }

  
}
