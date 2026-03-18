import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter-sidebar.component.html',
})
export class FilterSidebarComponent {
  @Output() categoryChanged = new EventEmitter<string>();

  selectCategory(category: string): void {
    this.categoryChanged.emit(category);
  }
}
