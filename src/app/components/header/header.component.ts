import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public isMenuOpen = true

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
