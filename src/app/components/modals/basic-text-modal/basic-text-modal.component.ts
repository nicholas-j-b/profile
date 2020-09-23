import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-basic-text-modal',
  templateUrl: './basic-text-modal.component.html',
  styleUrls: ['./basic-text-modal.component.scss']
})
export class BasicTextModalComponent implements OnInit {
  @Input() content: any;
  @Output() closeModal = new EventEmitter();

  public open = false;

  private closeToggle = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public openModal() {
    this.open = true;
    this.closeToggle = false;
  }

  public onCloseModal() {
    // this.closeModal.emit(true);
    this.closeToggle = false;
    this.open = false;
  }

  public onClickOutside() {
    console.log('outside');
    if (this.closeToggle && this.open) {
      this.onCloseModal();
    } else if (this.open) {
      this.closeToggle = true;
    }
  }
}
