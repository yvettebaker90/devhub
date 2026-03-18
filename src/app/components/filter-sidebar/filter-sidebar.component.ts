import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterState {
  categories: string[];
  types: string[];
  languages: string[];
  levels: string[];
}

type FilterGroup = 'categories' | 'types' | 'languages' | 'levels';

type FilterSection = {
  title: string;
  key: FilterGroup;
  options: string[];
};

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-sidebar.component.html',
})
export class FilterSidebarComponent {
  filterChanged = output<FilterState>();

  readonly sections: FilterSection[] = [
    {
      title: 'Category',
      key: 'categories',
      options: ['Frontend', 'Backend', 'DevOps', 'UX/UI', 'Career', 'Tools'],
    },
    {
      title: 'Type',
      key: 'types',
      options: ['Article', 'Video', 'Course', 'Tutorial', 'Podcast', 'Documentation'],
    },
    {
      title: 'Code Language',
      key: 'languages',
      options: ['JavaScript', 'TypeScript', 'Angular', 'CSS', 'Python', 'Java', 'C#', 'Go', 'Ruby'],
    },
    {
      title: 'Level',
      key: 'levels',
      options: ['Beginner', 'Intermediate', 'Job Ready'],
    },
  ];

  readonly selectedCategories = signal<Set<string>>(new Set());
  readonly selectedTypes = signal<Set<string>>(new Set());
  readonly selectedLanguages = signal<Set<string>>(new Set());
  readonly selectedLevels = signal<Set<string>>(new Set());

  onFilterChange(group: FilterGroup, value: string, isChecked: boolean): void {
    const selectedMap = {
      categories: this.selectedCategories,
      types: this.selectedTypes,
      languages: this.selectedLanguages,
      levels: this.selectedLevels,
    };

    const currentSignal = selectedMap[group];
    const updated = new Set(currentSignal());

    if (isChecked) {
      updated.add(value);
    } else {
      updated.delete(value);
    }

    currentSignal.set(updated);
    this.emitFilter();
  }

  private emitFilter(): void {
    this.filterChanged.emit({
      categories: Array.from(this.selectedCategories()),
      types: Array.from(this.selectedTypes()),
      languages: Array.from(this.selectedLanguages()),
      levels: Array.from(this.selectedLevels()),
    });
  }
}