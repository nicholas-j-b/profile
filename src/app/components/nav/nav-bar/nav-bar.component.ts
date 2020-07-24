import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public pageNames = [
    'About',
    'Professional',
    'Projects',
    'Hobbies'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}