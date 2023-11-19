import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { NewsService } from "src/app/services/news.service";
import { INews } from "src/app/models/news";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnDestroy {

  private destroy$ = new Subject<undefined>()

  public news: INews[] | null
  public category: string | null

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {
    this.route.params.pipe( takeUntil(this.destroy$) )
      .subscribe((params: Params) => {
        this.category = params.id
        this.newsService.getData(`everything?q=${this.category}`)
          .subscribe(data => { this.news = data.articles });
    });
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
