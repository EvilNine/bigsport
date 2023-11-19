import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "src/app/components/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { CategoryComponent } from './pages/category/category.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImagePreloadDirective } from './directives/image-preload.directive';
import { HomeCategoryComponent } from './pages/home/home-category/home-category.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    HeroComponent,
    CategoryComponent,
    SidebarComponent,
    ImagePreloadDirective,
    HomeCategoryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
