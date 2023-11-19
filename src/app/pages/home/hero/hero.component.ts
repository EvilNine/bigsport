import { Component, Input } from '@angular/core';
import { INews } from "src/app/models/news";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input() article: INews[]

}
