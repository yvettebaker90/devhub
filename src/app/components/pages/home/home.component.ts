import { Component, signal, computed } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { FilterSidebarComponent } from '../../filter-sidebar/filter-sidebar.component';
import { ResourceCardComponent } from '../../resource-card/resource-card.component';

interface ResourceItem {
  title: string;
  description: string;
  category: string;
  level: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchBarComponent,
    FilterSidebarComponent,
    ResourceCardComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly searchTerm = signal('');
  readonly selectedCategory = signal('All');

  readonly resources = signal<ResourceItem[]>([
    {
      title: 'Angular Official Docs',
      description: 'The official documentation for Angular concepts and APIs.',
      category: 'Angular',
      level: 'Beginner',
      link: 'https://angular.dev',
    },
    {
      title: 'TypeScript Handbook',
      description: 'Learn TypeScript basics and core language features.',
      category: 'TypeScript',
      level: 'Beginner',
      link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    },
    {
      title: 'CSS Tricks Guides',
      description: 'Practical guides for modern CSS layout and styling.',
      category: 'CSS',
      level: 'Intermediate',
      link: 'https://css-tricks.com/guides/',
    },
  ]);

  readonly filteredResources = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const category = this.selectedCategory();

    return this.resources().filter((resource: ResourceItem) => {
      const matchesCategory = category === 'All' || resource.category === category;
      const matchesSearch =
        term.length === 0 ||
        resource.title.toLowerCase().includes(term) ||
        resource.description.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  });

  updateSearch(term: string): void {
    this.searchTerm.set(term);
  }

  updateCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
