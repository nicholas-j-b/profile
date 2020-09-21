import { BasicTextModalComponent } from './../../../modals/basic-text-modal/basic-text-modal.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-banner',
  templateUrl: './button-banner.component.html',
  styleUrls: ['./button-banner.component.scss']
})
export class ButtonBannerComponent implements OnInit {
  @Input() content: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public bannerClick(): void {
    console.log(`banner button: ${this.content}`);
    // const modalRef = this.modalService.open(BasicTextModalComponent, { scrollable: true });
    // modalRef.componentInstance.content = this.content;

  }

}
