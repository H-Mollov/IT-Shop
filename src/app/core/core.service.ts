import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  loaderDisplay = { visible: false };

  showLoader(): void {
    this.loaderDisplay.visible = true;
  }

  hideLoader(): void {
    this.loaderDisplay.visible = false;
  }
}
