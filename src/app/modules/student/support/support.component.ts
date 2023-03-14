import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-supportlog',
  templateUrl: './support.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportComponent {

  supportlog: any[] = [];

/**
 * Constructor
 */
  constructor()
  {
  }

}
