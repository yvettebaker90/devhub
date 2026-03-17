import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resource-card.component.html',
})
export class ResourceCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly category = input.required<string>();
  readonly level = input.required<string>();
  readonly link = input.required<string>();
}
