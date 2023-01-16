import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";

import { HomeComponent } from "./home/home.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { AdministrationComponent } from "./administration/administration.component";
import { LandingComponent } from "./landing/landing.component";
import { RegisterationComponent } from "./registeration/registeration.component";


const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
    // the landing page before login :
    { path: "landing", component: LandingComponent },
    // the home page after login :
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterationComponent },
  { path: "Admin", component: AdministrationComponent },
  { path: "auth", component: AuthentificationComponent,}
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
