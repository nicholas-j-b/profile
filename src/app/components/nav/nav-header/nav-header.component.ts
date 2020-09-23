import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  @Input() selectedPage: string;

  public pageNames = [
    'Welcome',
    'About',
    'Professional',
    'Projects',
    'Hobby'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
