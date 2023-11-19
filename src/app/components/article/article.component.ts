import {Component, Input, OnInit} from '@angular/core';
import { INews } from "src/app/models/news";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent {
  @Input() article: INews

  constructor() {}
}
