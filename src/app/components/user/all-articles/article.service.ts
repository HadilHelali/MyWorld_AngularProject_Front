import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConstantURL } from "src/app/ConstantsUrl";
import { articleModel } from "../Models/articleModel";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: "root",
})
export class ArticleService {
  articles: articleModel[] = [
    // {
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },
    // {
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },
    // {
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },
    // {
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },
    // {
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },
    // {
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },
  ];
  constructor(private http: HttpClient) {}

  addArticle(title: String, author: String, text: String):Observable<any> {
    return this.http.post(ConstantURL.ADD_ARTICLE_URL, {
      "title":title,
      "author":author,
      "text":text,
    }, httpOptions);
  }

  getArticle(id: number): articleModel {
    return this.articles[id - 1];
  }
  getArticles(): articleModel[] {
    this.articles = [];
    this.http.get(ConstantURL.ARTICLES_LIST_URL).subscribe((article) => {
      Object.keys(article).map((i) => {
        this.articles.push(article[i]);
      });
    });
    return this.articles;
  }
  loggerArticle() {
    console.log(this.articles);
  }
  deleteArticle(article: articleModel) {
    const index = this.articles.indexOf(article);
    if (index < 0) {
      alert("Article innexistant");
    } else {
      this.articles.splice(index, 1);
    }
  }
}
