import { OwlOptions } from 'ngx-owl-carousel-o';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from 'app/modules/student/connect/posts/post.component';
import { StudentHttpService } from '../student-utils-services/student-http.service';
import { StudentDataService } from '../student-utils-services/student-data.service';

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
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    margin:10,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  public allPosts : any []; // after backend gives mock response will add a type.
  /* Constructor*/
  constructor(
     private _matDialog: MatDialog, private _studentUtils: StudentHttpService, private _studentData:StudentDataService
    ) {
          this._studentUtils.getAllpost().subscribe({
            next: (allPosts) => {
              this.allPosts = allPosts;
            },
            error: (err) => {
              console.log(err);
            }
          });
  }

  ngOnInit(){
      this._studentData.onPostsChange.subscribe({
        next: (updatedPosts) => {
          this.allPosts = updatedPosts;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  /* Open the note dialog*/
  addNewPost(): void
  {
    const dialogRef =  this._matDialog.open(PostComponent, {
      autoFocus: false,
      data     : {
          note: {}
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }

  
}
