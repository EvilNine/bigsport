import {Component, Input, OnInit} from '@angular/core';
import {INews} from "src/app/models/news";
import {NewsService} from "src/app/services/news.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit{

  constructor(private newsService: NewsService) {
  }

  @Input() news: INews[]

  ngOnInit() {
    this.getHeadlinesData()
  }

  getHeadlinesData(){
    this.newsService.getData('top-headlines?category=sports', 10)
      .subscribe(data => { this.news = data.articles });
  }

}
