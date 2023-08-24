import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  status = false;

  constructor(private _eref: ElementRef) {}

  addToggle() {
    this.status = !this.status;
  }

  onClick(event: Event) {
    if (!this._eref.nativeElement.contains(event.target)) { // verifica se o clique não foi na barra de navegação
      this.status = false;
    }
  }
}
