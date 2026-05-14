import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectModalComponent } from '../../components/project-modal/project-modal.component';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ProjectModalComponent],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projects = signal<Project[]>([]);
  isLoading = signal(true);
  selectedProject = signal<Project | undefined>(undefined);

  categories = computed(() => {
    const all = this.projects();
    const map = new Map<string, Project[]>();
    for (const p of all) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    return Array.from(map.entries()).map(([name, items]) => ({ name, items }));
  });

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Ошибка загрузки проектов:', err);
        this.isLoading.set(false);
      }
    });
  }
}