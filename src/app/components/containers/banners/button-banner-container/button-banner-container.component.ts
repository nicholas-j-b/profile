import { BasicTextModalComponent } from './../../../modals/basic-text-modal/basic-text-modal.component';
import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-banner-container',
  templateUrl: './button-banner-container.component.html',
  styleUrls: ['./button-banner-container.component.scss']
})
export class ButtonBannerContainerComponent implements OnInit {
  @Input() public content: any[];

  @ViewChild(BasicTextModalComponent) modal: BasicTextModalComponent;
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal(true);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  openModal(content: any) {
    console.log('open');
    this.modal.content = content;
    this.modal.openModal();
  }

  closeModal($event: any) {
    this.modal.onCloseModal();
  }

}
