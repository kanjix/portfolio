import { Component, OnInit, signal } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { NgIf } from '@angular/common'; // NgFor и NgStyle больше не нужны
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, RouterLink], // Оставили только базу
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Оставляем только загрузку, если захочешь вывести, например, 
  // одну главную картинку последнего проекта в Hero
  loading = signal(true);

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    // Мы можем даже не загружать проекты на главной, 
    // если Hero-блок полностью статичный.
    // Но оставим лоадер для чистоты процесса.
    this.loading.set(false);
  }
}