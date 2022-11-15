import { Component, OnInit } from '@angular/core';
import { Link } from './interface/Link';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  links: Link[] = [
    {
      label: 'Page1',
      route: './page1',
      routerLinkActiveOptions: { exact: true },
    },

    {
      label: 'Page2',
      route: './page2',
      routerLinkActiveOptions: { exact: true },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
