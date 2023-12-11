import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreateEventoComponent } from './pages/create-evento/create-evento.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { ListEventoComponent } from './pages/list-evento/list-evento.component';
import { ListTeamComponent } from './pages/list-team/list-team.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EventoComponent } from './pages/evento/evento.component';
import { TeamComponent } from './pages/team/team.component';
import { ModifyTeamComponent } from './pages/modify-team/modify-team.component';
import { ModifyEventoComponent } from './pages/modify-evento/modify-evento.component';
import { ModifyUserComponent } from './pages/modify-user/modify-user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [UserGuard],
  },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'createEvent', component: CreateEventoComponent },
  { path: 'createTeam', component: CreateTeamComponent },
  { path: 'listaUsers', component: ListUserComponent },
  { path: 'listaEventos', component: ListEventoComponent },
  { path: 'listaTeams', component: ListTeamComponent },
  { path: 'userDetails/:userId', component: ProfileComponent },
  { path: 'eventDetails/:eventId', component: EventoComponent },
  { path: 'teamDetails/:teamId', component: TeamComponent },
  { path: 'editTeam/:teamId', component: ModifyTeamComponent },
  { path: 'editEvento/:eventoId', component: ModifyEventoComponent },
  { path: 'editProfile/:userId', component: ModifyUserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
