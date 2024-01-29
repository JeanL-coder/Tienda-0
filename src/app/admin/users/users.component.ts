import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // Llamar al servicio para obtener usuarios
  }

  onAddUser(): void {
    // Logica para añadir usuario
  }

  onEditUser(user: any): void {
    // Logica para editar usuario
  }

  onDeleteUser(userId: number): void {
    // Llamar al servicio para aliminar usuario
  }
}
