import { Injectable } from "@angular/core";
import { articleModel } from "../Models/articleModel";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  articles: articleModel[] = [
    {
      id: 1,
      title: "My article",
      author: "salma",
      text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    },
    // {
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },{
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },{
    //   id: 1,
    //   title: "My article",
    //   author: "salma",
    //   text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    // },
    {
      id: 1,
      title: "My article",
      author: "salma",
      text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    },
    {
      id: 1,
      title: "My article",
      author: "salma",
      text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    },
    {
      id: 1,
      title: "My article",
      author: "salma",
      text: "lorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum loremlorem ipsum lorem ",
    },
  ];
  constructor() {}

  addArticle(article: articleModel) {
    this.articles.push(article);
  }
  getArticles(): articleModel[] {
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
