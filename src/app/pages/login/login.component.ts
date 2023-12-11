import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  formSubmit() {
    let userRoles: string[];
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username.trim() == null
    ) {
      alert('El nombre de usuario esta vacio');
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password.trim() == null
    ) {
      alert('La contraseña esta vacia');
      return;
    }

    this.userService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);
        this.userService.loginUser(data.token);
        this.userService.getCurrentUser().subscribe((user: any) => {
          console.log(user);
          this.userService.setUser(user);
          userRoles = this.userService.getUserRoles();
          if (
            (!userRoles.includes('INVITADO') && userRoles.includes('ADMIN')) ||
            userRoles.includes('USER')
          ) {
            //dashboard admin
            window.location.href = '/home';
            this.router.navigate(['home']);
            console.log('loggeado ADMIN');

            // this.userService.loginStatusSubjec.next(true);
            //user dashboard
            //window.location.href = '/user-dashboard';
            console.log('loggeado USER');
            // this.router.navigate(['user-dashboard']);
            // this.userService.loginStatusSubjec.next(true);
          } else {
            this.userService.logout();
          }
        });
      },
      (error) => {
        console.log(error);
        // this.snack.open(
        //   'Detalles inválidos , vuelva a intentar !!',
        //   'Aceptar',
        //   {
        //     duration: 3000,
        //   }
        // );
      }
    );
  }

  newUser = {
    id: '',
    username: '',
    password: '',
    name: '',
    surnames: '',
    email: '',
    profilePhoto: '',
    birthdate: '',
    description: '',
    roles: ['USER'],
    amigos: null,
    solicitudesEnviadas: null,
    solicitudesRecibidas: null,
  };
  registerUser() {
    if (
      this.newUser.username.trim() === '' ||
      this.newUser.username.trim() === null
    ) {
      alert('El nombre de usuario está vacío');
      return;
    }

    if (
      this.newUser.password.trim() === '' ||
      this.newUser.password.trim() === null
    ) {
      alert('La contraseña está vacía');
      return;
    }

    if (
      this.newUser.email.trim() === '' ||
      this.newUser.email.trim() === null
    ) {
      alert('El correo electrónico está vacío');
      return;
    }

    if (this.newUser.name.trim() === '' || this.newUser.name.trim() === null) {
      alert('El nombre está vacío');
      return;
    }

    if (
      this.newUser.surnames.trim() === '' ||
      this.newUser.surnames.trim() === null
    ) {
      alert('Los apellidos están vacíos');
      return;
    }

    if (this.newUser.birthdate === null) {
      alert('La fecha de nacimiento está vacía');
      return;
    }

    this.userService.createUser(this.newUser);
    alert('Usuario Registrado');
  }
  logout() {
    this.userService.logout();
    window.location.href = '/login';
    this.router.navigate(['login']);
  }
}
