// project-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // Импортируем!

@Component({
  selector: 'app-project-card',
  standalone: true, // Проверьте, что эта строка есть
  imports: [CommonModule, NgOptimizedImage], // Добавляем сюда
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: any;
  @Output() open = new EventEmitter<any>();
  imageLoaded = false;
}