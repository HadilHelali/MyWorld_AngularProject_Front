import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../all-articles/article.service';
import { articleModel } from '../Models/articleModel';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  // @Input() title : String = "title";
  // @Input() author : String = "author name";
  // @Input() text : String = "text";
  article : articleModel 
  constructor(private router: ActivatedRoute,private articleService: ArticleService) { 
    router.params.subscribe((params) => { 
      this.article=this.articleService.getArticle(params['id']) 
      console.log("aaaaaaaaaa",this.article,params['id']);
      
    });
  }

  ngOnInit(): void {
  }

}
