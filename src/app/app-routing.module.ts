import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";

import { HomeComponent } from "./components/home/home.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { AdministrationComponent } from "./components/administration/administration.component";
import { LandingComponent } from "./components/landing/landing.component";
import { RegisterationComponent } from "./components/registeration/registeration.component";
// focus world :
import { TimerComponent } from "./components/timer/timer.component";



const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
    // the landing page before login :
    { path: "landing", component: LandingComponent },
    // the home page after login :
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterationComponent },
  { path: "Admin", component: AdministrationComponent },
  { path: "auth", component: AuthentificationComponent},
  // focus world :
  { path: "focus", component: TimerComponent},
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
