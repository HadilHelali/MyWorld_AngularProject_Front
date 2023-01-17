import { Component, OnInit } from '@angular/core';
import { articleModel } from '../Models/articleModel';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit {
  articles:  articleModel[] =[]
  constructor(private articleService: ArticleService ) { }

  ngOnInit(): void { 
    console.log('====================================');
    console.log(this.articles);
    console.log('====================================');
    this.articles=this.articleService.getArticles()
    console.log(this.articles,this.articles[0].title);
  }

}
