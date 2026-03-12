import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tarea } from './tarea.model';

@Component({
  selector: 'app-tarea',
  imports: [],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {

  @Input({ required: true }) tarea!: tarea;
  @Output() terminada = new EventEmitter<string>();

  alCompletarTarea() {
    this.terminada.emit(this.tarea.id);
  }
}