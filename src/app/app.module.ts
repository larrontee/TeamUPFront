import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreateEventoComponent } from './pages/create-evento/create-evento.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { ListTeamComponent } from './pages/list-team/list-team.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { ListEventoComponent } from './pages/list-evento/list-evento.component';
import { ModifyEventoComponent } from './pages/modify-evento/modify-evento.component';
import { ModifyTeamComponent } from './pages/modify-team/modify-team.component';
import { ModifyUserComponent } from './pages/modify-user/modify-user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EventoComponent } from './pages/evento/evento.component';
import { TeamComponent } from './pages/team/team.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './services/auth.interceptor';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    CreateUserComponent,
    CreateEventoComponent,
    CreateTeamComponent,
    ListTeamComponent,
    ListUserComponent,
    ListEventoComponent,
    ModifyEventoComponent,
    ModifyTeamComponent,
    ModifyUserComponent,
    ProfileComponent,
    EventoComponent,
    TeamComponent,
    HttpClientModule,
    FormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
