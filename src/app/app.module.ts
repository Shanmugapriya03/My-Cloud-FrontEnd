import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './service/auth-service.service';
import { SessionService } from './service/session.service';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContainersComponent } from './dashboard/containers/containers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ContainersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {path : '' , component : LoginComponent},
        {path : 'login' , component : LoginComponent},
        {path : 'signup' , component : SignupComponent},
        {path : 'dashboard', component : DashboardComponent, canActivate : [AuthGuard],
        children: [{
          path: 'containers',
          component: ContainersComponent
        }]
        }
    ])
  ],
  providers: [AuthService,SessionService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
