import { NavigationService } from './../../../service/navigation/navigation.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss']
})
export class NavBarItemComponent implements OnInit {

  @Input() pageName: string;
  @Input() selected: boolean;

  constructor(
    private readonly navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  public navigateTo(): void {
    this.navigationService.navigateToPage(this.pageName);
  }

}
