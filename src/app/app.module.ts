// Other Modules : 
import {ChartModule} from 'primeng/chart';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
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
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
// User Space :
import { RegisterationComponent } from './components/spacy/registeration/registeration.component';
import { HomeComponent } from "./components/user/home/home.component";
import { UserSpaceComponent } from './user-space/user-space.component';
import { WelcomeComponent } from './components/spacy/welcome/welcome.component';
// Authentification : 
import { AuthentificationComponent } from "./components/authentification/authentification.component";
import { authInterceptorProviders } from "./components/authentification/services/auth.interceptor";
///// focus world : 
import { TimerComponent } from './components/user/timer/timer.component';
//// Todo world :
import { TodoComponent } from './components/user/todos/todo/todo.component';
import { ListTodosComponent } from './components/user/todos/list-todos/list-todos.component';
import { TodoItemComponent } from './components/user/todos/todo-item/todo-item.component';
//// Read world :
import { ArticleComponent } from './components/user/article/article.component';
import { AllArticlesComponent } from './components/user/all-articles/all-articles.component';
import { AddArticleComponent } from './components/user/add-article/add-article.component';
// Administration : 
import { AdministrationComponent } from './components/administration/administration.component';
import { DashbordcomponementComponent } from './components/administration/dashbordcomponement/dashbordcomponement.component';
import { AdminProfilecomponementComponent } from './components/administration/admin-profilecomponement/admin-profilecomponement.component';
import { UserListcomponementComponent } from './components/administration/user-listcomponement/user-listcomponement.component';
import { AdminService } from "./components/administration/services/admin.service";
import { RechercheUserComponent } from './components/administration/recherche-user/recherche-user.component';
import { LandingComponent } from './components/spacy/landing/landing.component';



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
    ChartModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [AdminService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
