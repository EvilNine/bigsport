import {Component, Input} from '@angular/core';
import {INews} from "src/app/models/news";

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html'
})
export class HomeCategoryComponent {

  @Input() title: string
  @Input() news: INews[]

}
