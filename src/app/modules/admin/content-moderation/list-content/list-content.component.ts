import { Component } from '@angular/core';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})
export class ListContentComponent {

  unApprovedContent = [1,2];

  onBtnClick(){
    this.unApprovedContent.pop();
  }

}
