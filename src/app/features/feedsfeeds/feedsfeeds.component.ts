import { Component } from '@angular/core';

import { RightSideComponent } from './right-side/right-side.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-feedsfeeds',
  imports: [RightSideComponent,CenterContentComponent,LeftSideComponent,RouterLink],
  templateUrl: './feedsfeeds.component.html',
  styleUrl: './feedsfeeds.component.css',
})
export class FeedsfeedsComponent {}
