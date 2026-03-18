import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  readonly searchChanged = output<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const term = target?.value ?? '';
    this.searchChanged.emit(term);
  }
}
