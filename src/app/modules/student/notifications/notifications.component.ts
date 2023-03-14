import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'notifications',
    templateUrl  : './notifications.component.html',
    encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent
{
  /* Constructor*/
  constructor() {
  }

  changelog: any[] = [
    // v17.0.0
    {
        version    : 'v17.0.0',
        releaseDate: 'Nov 18, 2022',
        changes    : [
            {
                type: 'Breaking',
                list: [
                    '(Dependencies) From this version up, Fuse will not be compatible with Legacy Angular Material components',
                    '(Linting) Removed linter setup and eslint packages since most of the linting happens on Editors and IDEs. This is also partly because of slow development speed of angular-eslint packages.',
                    '(.fuse-mat-textarea) Removed in favor of CSS :has selector, now textareas within "mat-form-field" components are detected automatically',
                    '(.fuse-mat-no-subscript) Removed in favor of \'subscriptSizing="dynamic"\' property of "mat-form-field"',
                ]
            },
            {
                type: 'Changed',
                list: [
                    '(Dependencies) Updated Angular & Angular Material to v15.0.0',
                    '(Dependencies) Updated various other packages',
                    '(Dependencies) Removed ngx-markdown from the package.json, it still can be used within Fuse, it\'s a part of the effort to make releasing Fuse updates easier',
                    '(General) Matched the files and folders with a newly created Angular v15 project to make things easier for the newcomers',
                    '(Angular Material) Re-wrote the override styles to make sure everything look the same as before (compatibility for MDC components)',
                    '(Theming) Re-wrote the theming system to make sure to keep everything working as before without any breaking changes'
                ]
            }
        ]
    },
  ]
}
