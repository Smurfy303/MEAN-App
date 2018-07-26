import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { FormcontrolloginComponent } from './formcontrollogin/formcontrollogin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register' , component : RegisterComponent},
    { path: 'login' , component : FormcontrolloginComponent},
    { path: 'success', component: SuccessLoginComponent },
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
