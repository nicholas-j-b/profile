import { ClassField } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public open<T>(modal: T) {

  }

  // public open<T>(modalType: new() => T, settings: any): T {
  //   const modal = new modalType();
  //   return modal;
  // }
}
