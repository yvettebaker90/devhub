import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cards.component.html',
})
export class ResourceCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly category = input.required<string>();
  readonly level = input.required<string>();
  readonly link = input.required<string>();
  readonly type = input.required<string>();
  readonly author = input<string>('Unknown author');
  readonly date = input<string | Date>(new Date());
  readonly isCommunityPick = input<boolean>(false);
}