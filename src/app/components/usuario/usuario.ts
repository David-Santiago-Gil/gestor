import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

interface Usuarios {
  id: string;
  avatar: string;
  nombre: string;
}

// type Usuarios = {
//   id: string;
//   avatar: string;
//   nombre: string;
// }

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {

  @Input({ required: true }) usuario!: Usuarios;

  @Output() seleccion = new EventEmitter();


  get rutaImagen() {
    return 'img/' + this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}