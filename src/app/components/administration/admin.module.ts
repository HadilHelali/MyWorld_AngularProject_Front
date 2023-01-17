import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ChartModule } from "primeng/chart";
import { AdminProfilecomponementComponent } from "./admin-profilecomponement/admin-profilecomponement.component";
import { AdministrationComponent } from "./administration.component";
import { DashbordcomponementComponent } from "./dashbordcomponement/dashbordcomponement.component";
import { UserListcomponementComponent } from "./user-listcomponement/user-listcomponement.component";


/**
 * The adminModule class
 */
@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule, // required animations module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    RouterModule,
        ChartModule,
    ],
    declarations: [
    AdministrationComponent,
    DashbordcomponementComponent,
    AdminProfilecomponementComponent,
    UserListcomponementComponent,
    ],
    providers: [],
    entryComponents:[
        AdministrationComponent,
    ],
})
export class AdminModule {
}