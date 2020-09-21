import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-text-modal',
  templateUrl: './basic-text-modal.component.html',
  styleUrls: ['./basic-text-modal.component.scss']
})
export class BasicTextModalComponent implements OnInit {
  @Input() content: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
