import { Component, Input } from '@angular/core';
import { Tarea } from "../tarea/tarea";
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-tareas',
  imports: [Tarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  @Input({ required: true }) nombre!: string;
  @Input({ required: true }) idUsuario!: string;
  tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen: 'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
      expira: '2026-04-14'
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2026-03-16',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2026-03-30',
    },
  ]

  get tareasUsuarioSeleccionado() {
    return this.tareas.filter((tarea) => tarea.idUsuario === this.idUsuario);
  }
}