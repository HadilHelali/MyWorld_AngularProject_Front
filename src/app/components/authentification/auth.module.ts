import { NgModule } from "@angular/core";
import { AuthentificationComponent } from "./authentification.component";
import { AuthInterceptor } from "./services/auth.interceptor";
import { AuthService } from "./services/auth.services";

/**
 * The AuthModule class
 */
@NgModule({
    imports: [
  
    ],
    declarations: [
        //AuthentificationComponent
    ],
    providers: [AuthInterceptor,AuthService],
    entryComponents:[
        AuthentificationComponent,
    ],
})
export class AuthModule {
}