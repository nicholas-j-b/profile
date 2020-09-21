import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-banner-container',
  templateUrl: './button-banner-container.component.html',
  styleUrls: ['./button-banner-container.component.scss']
})
export class ButtonBannerContainerComponent implements OnInit {
  @Input() public content: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
