import { Component, OnInit } from '@angular/core';
import { NewsService } from "src/app/services/news.service";
import { INews } from "src/app/models/news";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  news: INews[]
  footballNews: INews[]
  basketballNews: INews[]
  hockeyNews: INews[]
  tennisNews: INews[]
  nflNews: INews[]
  baseballNews: INews[]

  constructor( private newsService: NewsService ) {
  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.newsService.getData('top-headlines?category=sports', 5)
      .subscribe(data => { this.news = data.articles });

    this.newsService.getData(`everything?q=football`)
      .subscribe(data => { this.footballNews = data.articles });

    this.newsService.getData(`everything?q=basketball`)
      .subscribe(data => { this.basketballNews = data.articles });

    this.newsService.getData(`everything?q=hockey`)
      .subscribe(data => { this.hockeyNews = data.articles });

    this.newsService.getData(`everything?q=tennis`)
      .subscribe(data => { this.tennisNews = data.articles });

    this.newsService.getData(`everything?q=NFL`)
      .subscribe(data => { this.nflNews = data.articles });

    this.newsService.getData(`everything?q=baseball`)
      .subscribe(data => { this.baseballNews = data.articles });
  }

}
