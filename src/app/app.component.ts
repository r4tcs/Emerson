import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Navigation';
  components: boolean;
  components1: boolean;
  components2: boolean;
  components3: boolean;
  showMore: boolean;
  showMoreItems: Array<string> = [];
  componentsShowMore: boolean;
  sidebar: boolean;
  showMoreClick: boolean;
  sidebarItems: Array<string> = [];

  ngOnInit(): void {
    this.sidebar = false;
    this.showMoreClick = false;
    this.components = true;
    this.components1 = true;
    this.components2 = true;
    this.components3 = true;
    this.componentsShowMore = false;
    this.setVisibility();
  }

  setVisibility(): void {
    if ($(window).width() < 1300) {
      this.components2 = false;
      this.components3 = false;
      this.showMore = true;
      this.showMoreItems.push('Components 2');
      this.showMoreItems.push('Components 3');
      if ($(window).width() < 1010) {
        this.components1 = false;
        this.sidebar = true;
        this.showMoreItems.length = 0;
        this.sidebarItems.push('Components 1');
        this.sidebarItems.push('Components 2');
        this.sidebarItems.push('Components 3');
        if ($(window).width() < 745) {
          this.components = false;
          this.componentsShowMore = false;
          this.sidebarItems.unshift('Some other action');
          this.sidebarItems.unshift('Another action');
          this.sidebarItems.unshift('Action');
          this.sidebarItems.unshift('Components');
        }
      }
    }
  }

  showMoreClicked(): void {
    this.showMoreClick = !this.showMoreClick;
  }
}
