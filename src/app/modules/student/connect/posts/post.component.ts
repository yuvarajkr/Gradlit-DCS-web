import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PostComponent {

  postType = "post";
  formFieldHelpers: string[] = [''];
  /* Constructor*/
  constructor() {
  }


  removeImage(){
    
  }

  OnTypeSelect(type){
    this.postType = type;
  }

  link = function (scope, element, attrs) {
    const input = element.find('#fileInput');
    const button = element.find('#uploadButton');

    if (input.length && button.length) {
        button.click((e) => input.click());
    }
  }
}
