import { Component, OnInit } from '@angular/core';
import { User } from '../../clases/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  userRole: boolean;
  roles: string[];
  usuario: User;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.userService.getCurrentUser().subscribe((userData: any) => {
      this.usuario = userData;
      if (this.userService.isAdmin()) {
        this.userRole = true;
      } else {
        this.userRole = false;
      }
    });
  }
}
