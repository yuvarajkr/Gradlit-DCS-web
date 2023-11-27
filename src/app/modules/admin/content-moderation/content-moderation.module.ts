import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContentComponent } from './list-content/list-content.component';
import { Route, RouterModule } from '@angular/router';
import { ContentModerationComponent } from './content-moderation/content-moderation.component';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';

const contentRoutes: Route[] = [{
  path:'', 
  component:ContentModerationComponent,
  children: [
    {
      path:'content-to-be-approved',
      component: ListContentComponent
    }
  ]
}];


@NgModule({
  declarations: [
    ContentModerationComponent,
    ListContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes),
    FuseCardModule,
    MatIconModule
    
  ],
})
export class ContentModerationModule { }
