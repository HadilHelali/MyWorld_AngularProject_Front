import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() title : String = "title";
  @Input() author : String = "author name";
  @Input() text : String = "text";

  constructor() { }

  ngOnInit(): void {
  }

}
