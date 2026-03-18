import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter-sidebar.component.html',
})
export class FilterSidebarComponent {
  readonly categoryChanged = output<string>();

  selectCategory(category: string): void {
    this.categoryChanged.emit(category);
  }
}
