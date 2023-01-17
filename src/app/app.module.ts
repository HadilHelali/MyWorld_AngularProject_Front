
// Authentification : 
import { AuthentificationComponent } from "./components/authentification/authentification.component";
import { authInterceptorProviders } from "./components/authentification/services/auth.interceptor";
// Other Modules : 
import {ChartModule} from 'primeng/chart';
import { BrowserModule } from "@angular/platform-browser";
import { PagesModule } from "./pages/pages.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
// HTTP : 
import { HttpClientModule } from "@angular/common/http";

// Components : 
import { AppComponent } from "./app.component";
import { AdministrationComponent } from './components/administration/administration.component';
import { DashbordcomponementComponent } from './components/administration/dashbordcomponement/dashbordcomponement.component';
import { AdminProfilecomponementComponent } from './components/administration/admin-profilecomponement/admin-profilecomponement.component';
import { UserListcomponementComponent } from './components/administration/user-listcomponement/user-listcomponement.component';

import { RegisterationComponent } from './components/spacy/registeration/registeration.component';

//todos
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

///// focus world : 
import { TimerComponent } from './components/user/timer/timer.component';

import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { AdminService } from "./components/administration/services/admin.service";
import { RechercheUserComponent } from './components/administration/recherche-user/recherche-user.component';
import { LandingComponent } from './components/spacy/landing/landing.component';
/*
import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
*/

import { UserSpaceComponent } from './user-space/user-space.component';
import { WelcomeComponent } from './components/spacy/welcome/welcome.component';
import { TodoComponent } from './components/user/todos/todo/todo.component';
import { ListTodosComponent } from './components/user/todos/list-todos/list-todos.component';
import { TodoItemComponent } from './components/user/todos/todo-item/todo-item.component';
import { ArticleComponent } from './components/user/article/article.component';
import { AllArticlesComponent } from './components/user/all-articles/all-articles.component';
import { AddArticleComponent } from './components/user/add-article/add-article.component';
import { HomeComponent } from "./components/user/home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    // User
    HomeComponent,
    RegisterationComponent,
    AuthentificationComponent,
    //// Focus World : 
    TimerComponent,

    ////////////////////////////
    // admin
    AdministrationComponent,
    DashbordcomponementComponent,
    AdminProfilecomponementComponent,
    UserListcomponementComponent,
    RechercheUserComponent,
    UserSpaceComponent,
    WelcomeComponent,
    TodoComponent,
    ListTodosComponent,
    TodoItemComponent,
    ArticleComponent,
    AllArticlesComponent,
    AddArticleComponent,
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    PagesModule,
    ChartModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule
   

  ],
  providers: [AdminService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
