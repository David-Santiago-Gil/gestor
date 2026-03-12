import { Component, Input } from '@angular/core';
import { Tarea } from "../tarea/tarea";
import { required } from '@angular/forms/signals';
import { NuevaTarea } from "../nueva-tarea/nueva-tarea";

@Component({
  selector: 'app-tareas',
  imports: [Tarea, NuevaTarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  @Input({ required: true }) nombre!: string;
  @Input({ required: true }) idUsuario!: string;
  estaAgregandoTareaNueva = false;

  tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen: 'Aprender todas las características básicas y avanzas Angular cómo apicarlas.',
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

  alCompletarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva = true;
  }
  alCancelarTareaNueva() {
    this.estaAgregandoTareaNueva = false;
  }
}