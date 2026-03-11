import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { type Usuarios } from './usuario.model';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {

  @Input({ required: true }) usuario!: Usuarios;
  @Input({ required: true }) seleccionado!: boolean;
  @Output() seleccion = new EventEmitter();


  get rutaImagen() {
    return 'img/' + this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}