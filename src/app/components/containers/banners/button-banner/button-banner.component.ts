import { ModalService } from './../../../../service/modal/modal.service';
import { BasicTextModalComponent } from './../../../modals/basic-text-modal/basic-text-modal.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-banner',
  templateUrl: './button-banner.component.html',
  styleUrls: ['./button-banner.component.scss']
})
export class ButtonBannerComponent implements OnInit {
  @Input() content: any;

  @Output() openModal = new EventEmitter<any>();

  constructor(
    private readonly modalService: ModalService
  ) {
  }

  ngOnInit(): void {
  }

  public bannerClick(): void {
    this.openModal.emit(this.content);
    // const modalRef = this.modalService.open(BasicTextModalComponent, {});
    // const modalRef = this.modalService.open(BasicTextModalComponent, { scrollable: true });
    // modalRef.componentInstance.content = this.content;

  }

}
