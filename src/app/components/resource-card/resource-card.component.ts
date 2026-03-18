import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  standalone: true,
  templateUrl: './resource-card.component.html',
})
export class ResourceCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() category!: string;
  @Input() level!: string;
  @Input() link!: string;
}
