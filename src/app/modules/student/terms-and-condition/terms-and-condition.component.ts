import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss']
})
export class TermsAndConditionComponent {
  ngOnInit(): void {
    window.open('https://gradlit.in/terms-and-condition/');
  }
}
