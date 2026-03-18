import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterState {
  categories: string[];
  types: string[];
  levels: string[];
}

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-sidebar.component.html',
})
export class FilterSidebarComponent {
  filterChanged = output<FilterState>();

  readonly selectedCategories = signal<Set<string>>(new Set());
  readonly selectedTypes = signal<Set<string>>(new Set());
  readonly selectedLevels = signal<Set<string>>(new Set());

  onCategoryChange(category: string, isChecked: boolean): void {
    const updated = new Set(this.selectedCategories());
    if (isChecked) {
      updated.add(category);
    } else {
      updated.delete(category);
    }
    this.selectedCategories.set(updated);
    this.emitFilter();
  }

  onTypeChange(type: string, isChecked: boolean): void {
    const updated = new Set(this.selectedTypes());
    if (isChecked) {
      updated.add(type);
    } else {
      updated.delete(type);
    }
    this.selectedTypes.set(updated);
    this.emitFilter();
  }

  onLevelChange(level: string, isChecked: boolean): void {
    const updated = new Set(this.selectedLevels());
    if (isChecked) {
      updated.add(level);
    } else {
      updated.delete(level);
    }
    this.selectedLevels.set(updated);
    this.emitFilter();
  }

  private emitFilter(): void {
    this.filterChanged.emit({
      categories: Array.from(this.selectedCategories()),
      types: Array.from(this.selectedTypes()),
      levels: Array.from(this.selectedLevels()),
    });
  }
}
