import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";

// User pages : 
import { HomeComponent } from "./components/user/home/home.component";
import { AuthentificationComponent } from "./components/authentification/authentification.component";
import { AdministrationComponent } from "./components/administration/administration.component";
import { LandingComponent } from "./components/spacy/landing/landing.component";
import { RegisterationComponent } from "./components/spacy/registeration/registeration.component";
// focus world :
import { TimerComponent } from "./components/user/timer/timer.component";
import { UserSpaceComponent } from "./user-space/user-space.component";
import { WelcomeComponent } from "./components/spacy/welcome/welcome.component";
import { ArticleComponent } from "./components/user/article/article.component";
import { AuthGuard } from "./guards/auth-guard";




const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
    // the landing page before login :
    { path: "landing", component: LandingComponent ,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'auth', component: AuthentificationComponent},
      { path: "register", component: RegisterationComponent }
    ]},
    // the home page after login :
  { path: "home", component: UserSpaceComponent , canActivate: [AuthGuard] ,
  children: [
    {path: '', component: HomeComponent},
    // focus world :
    { path: "focus", component: TimerComponent},
    // read world :
    { path: "read", component: ArticleComponent},], },
    // Administrator :
  { path: "Admin", component: AdministrationComponent , canActivate: [AuthGuard] },  
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
