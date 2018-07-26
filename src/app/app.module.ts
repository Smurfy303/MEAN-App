import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from './routing'
import { RouterModule, Routes } from '@angular/router';

import{ DataService } from './data.service';

import { AppComponent } from './app.component';
import { FormcontrolloginComponent } from './formcontrollogin/formcontrollogin.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CrudFormComponent } from './crud-form/crud-form.component';

/*const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
];*/

@NgModule({
  declarations: [
    AppComponent,
    FormcontrolloginComponent,
    SuccessLoginComponent,
    HomeComponent,
    RegisterComponent,
    CrudFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ROUTING
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
