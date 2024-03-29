import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyPolicyComponent implements OnInit {
  /* Constructor*/
 constructor() {
 }
  ngOnInit(): void {
    window.open('https://gradlit.in/privacy-policy/');
  }
}
