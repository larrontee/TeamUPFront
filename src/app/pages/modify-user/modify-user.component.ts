import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../clases/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-user.component.html',
  styleUrl: './modify-user.component.css',
})
export class ModifyUserComponent implements OnInit {
  userId: number;
  user: User;
  deatils = { username: '', email: '', description: '' };
  loginData = {
    username: '',
    password: '',
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['userId']; // Obtiene el ID del parámetro de la ruta
      // Lógica para utilizar el ID del usuario en la edición del perfil
      this.cargarDatos();
    });
  }

  cargarDatos() {
    this.userService.getUserById(this.userId).subscribe((userData: any) => {
      this.user = userData;
    });
  }

  actualizarUser() {
    if (this.deatils.username != null && this.deatils.username != '') {
      this.user.username = this.deatils.username;
    }
    if (this.deatils.email != null && this.deatils.email != '') {
      this.user.email = this.deatils.email;
    }
    if (this.deatils.description != null && this.deatils.description != '') {
      this.user.description = this.deatils.description;
    }
    this.userService.updateUserDetails(this.user).subscribe((response) => {});
    if (!this.userService.isAdmin()) {
      this.userService.logout();
      this.router.navigate(['/home']);
      // this.loginData.username = this.user.username;
      // this.loginData.password = this.user.password;
      // this.userService.generateToken(this.loginData).subscribe((data: any) => {
      //   console.log(data);
      //   this.userService.loginUser(data.token);
      // });
    } else {
      this.router.navigate(['/listaUsers']);
    }
  }

  actualizarUserAdmin() {
    if (this.deatils.username != null && this.deatils.username != '') {
      this.user.username = this.deatils.username;
    }
    if (this.deatils.email != null && this.deatils.email != '') {
      this.user.email = this.deatils.email;
    }
    if (this.deatils.description != null && this.deatils.description != '') {
      this.user.description = this.deatils.description;
    }
    this.userService.updateUserDetails(this.user).subscribe((response) => {});
    this.userService.logout();
    this.loginData.username = this.user.username;
    this.loginData.password = this.user.password;
    // this.userService.generateToken(this.loginData).subscribe((data: any) => {
    //   console.log(data);
    //   this.userService.loginUser(data.token);
    // });
    this.router.navigate(['/']);
  }
}
