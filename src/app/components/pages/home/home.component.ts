import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { HeroComponent } from '../../hero/hero.component';
import { FilterSidebarComponent, FilterState } from '../../filter-sidebar/filter-sidebar.component';
import { ResourceCardComponent } from '../../cards/cards.component';

interface ResourceItem {
  title: string;
  description: string;
  category: string;
  language?: string;
  level: string;
  link: string;
  type: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    FilterSidebarComponent,
    ResourceCardComponent,
    HeroComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly searchTerm = signal('');
  readonly selectedCategories = signal<string[]>([]);
  readonly selectedTypes = signal<string[]>([]);
  readonly selectedLanguages = signal<string[]>([]);
  readonly selectedLevels = signal<string[]>([]);

  readonly resources = signal<ResourceItem[]>([
    {
      title: 'Angular Official Docs',
      description: 'The official documentation for Angular concepts and APIs.',
      category: 'Frontend',
      language: 'Angular',
      level: 'Beginner',
      link: 'https://angular.dev',
      type: 'Documentation',
    },
    {
      title: 'TypeScript Handbook',
      description: 'Learn TypeScript basics and core language features.',
      category: 'Frontend',
      language: 'TypeScript',
      level: 'Beginner',
      link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
      type: 'Documentation',
    },
    {
      title: 'CSS Tricks Guides',
      description: 'Practical guides for modern CSS layout and styling.',
      category: 'Frontend',
      language: 'CSS',
      level: 'Intermediate',
      link: 'https://css-tricks.com/guides/',
      type: 'Article',
    },
    {
      title: 'RxJS Documentation',
      description: 'Comprehensive guide to reactive programming with RxJS.',
      category: 'Frontend',
      language: 'JavaScript',
      level: 'Intermediate',
      link: 'https://rxjs.dev/guide/overview',
      type: 'Documentation',
    },
    {
      title: 'Angular Material',
      description: 'UI component library for Angular applications.',
      category: 'Frontend',
      language: 'Angular',
      level: 'Intermediate',
      link: 'https://material.angular.io',
      type: 'Library',
    },
    {
      title: 'Advanced TypeScript Types',
      description: 'Deep dive into advanced TypeScript type features.',
      category: 'Frontend',
      language: 'TypeScript',
      level: 'Advanced',
      link: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html',
      type: 'Documentation',
    }
  ]);

  readonly filteredResources = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const categories = this.selectedCategories();
    const types = this.selectedTypes();
    const levels = this.selectedLevels();

    return this.resources().filter((resource: ResourceItem) => {
      const matchesCategory =
        categories.length === 0 || categories.includes(resource.category);
      const matchesType = types.length === 0 || types.includes(resource.type);
      const matchesLevel = levels.length === 0 || levels.includes(resource.level);
      const matchesLanguage = this.selectedLanguages().length === 0 || this.selectedLanguages().includes(resource.language || '');
      const matchesSearch =
        term.length === 0 ||
        resource.title.toLowerCase().includes(term) ||
        resource.description.toLowerCase().includes(term);

      return matchesCategory && matchesType && matchesLevel && matchesLanguage && matchesSearch;
    });
  });

  updateSearch(term: string): void {
    this.searchTerm.set(term);
  }

  updateFilters(filterState: FilterState): void {
    this.selectedCategories.set(filterState.categories);
    this.selectedTypes.set(filterState.types);
    this.selectedLanguages.set(filterState.languages);
    this.selectedLevels.set(filterState.levels);
  }
}

