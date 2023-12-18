import { Component, OnInit } from '@angular/core';
import { User } from '../../clases/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  userId: number;
  user: User;

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

  logout() {
    this.userService.logout();
    window.location.href = '/login';
    this.router.navigate(['login']);
  }
}
