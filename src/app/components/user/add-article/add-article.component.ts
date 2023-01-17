import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../all-articles/article.service';
import { articleModel } from '../Models/articleModel';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  isSubmitted : Boolean  =  false; 
 
  newArticle:articleModel
  myform = new FormGroup({
    author : new FormControl('', [Validators.required]),
    title : new FormControl('', [Validators.required]),
    text : new FormControl('', [Validators.required]),
});

  constructor(private articleService: ArticleService, private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }
 
  addArticle(){
    this.isSubmitted = true;
    console.log(this.myform.valid)
    if(this.myform.valid){
      this.articleService.addArticle(this.myform.get('title')?.value,this.myform.get('author')?.value,this.myform.get('text')?.value)
      .subscribe(
        data => {
          console.log("eeeeeeee",data);
          this.router.navigateByUrl('/home/read');
        },
        err => {
          console.log("eeeeeeee");}
      );
      
    }
   
  }
}
