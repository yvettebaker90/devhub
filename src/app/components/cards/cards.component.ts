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
  readonly language = input<string>('');
  readonly level = input.required<string>();
  readonly link = input.required<string>();
  readonly type = input.required<string>();
  readonly author = input<string>('Unknown author');
  readonly date = input<string | Date>(new Date());
  readonly isCommunityPick = input<boolean>(false);

  private readonly badgeBase =
    'rounded-full border px-3 py-1 text-xs tracking-widest';

  private readonly categoryStyles: Record<string, string> = {
    Frontend: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300',
    Backend: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
    DevOps: 'border-orange-400/20 bg-orange-400/10 text-orange-300',
    'UX/UI': 'border-pink-400/20 bg-pink-400/10 text-pink-300',
    Career: 'border-indigo-400/20 bg-indigo-400/10 text-indigo-300',
    Tools: 'border-slate-400/20 bg-slate-400/10 text-slate-300',
  };

  private readonly languageStyles: Record<string, string> = {
    JavaScript: 'border-yellow-400/20 bg-yellow-100/10 text-yellow-200',
    TypeScript: 'border-blue-400/20 bg-blue-400/10 text-blue-300',
    Angular: 'border-red-400/20 bg-red-400/10 text-red-300',
    CSS: 'border-sky-400/20 bg-sky-400/10 text-sky-300',
    Python: 'border-lime-400/20 bg-lime-400/10 text-lime-300',
    Java: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
    'C#': 'border-violet-400/20 bg-violet-400/10 text-violet-300',
    Go: 'border-teal-400/20 bg-teal-400/10 text-teal-300',
    Ruby: 'border-rose-400/20 bg-rose-400/10 text-rose-300',
  };

  private readonly typeStyles: Record<string, string> = {
    Article: 'border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300',
    Video: 'border-red-400/20 bg-red-400/10 text-red-300',
    Course: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
    Tutorial: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300',
    Podcast: 'border-orange-400/20 bg-orange-400/10 text-orange-300',
    Documentation: 'border-indigo-400/20 bg-indigo-400/10 text-indigo-300',
    Library: 'border-violet-400/20 bg-violet-400/10 text-violet-300',
  };

  private readonly levelStyles: Record<string, string> = {
    Beginner: 'border-green-400/20 bg-green-400/10 text-green-300',
    Intermediate: 'border-yellow-400/20 bg-yellow-400/10 text-yellow-300',
    Advanced: 'border-orange-400/20 bg-orange-400/10 text-orange-300',
    'Job Ready': 'border-rose-400/20 bg-rose-400/10 text-rose-300',
  };

  categoryBadgeClass(): string {
    return `${this.badgeBase} ${this.categoryStyles[this.category()] ?? 'border-blue-400/20 bg-blue-400/10 text-blue-300'}`;
  }

  languageBadgeClass(): string {
    return `${this.badgeBase} ${this.languageStyles[this.language()] ?? 'border-cyan-700/20 bg-cyan-400/10 text-cyan-300'}`;
  }

  typeBadgeClass(): string {
    return `${this.badgeBase} ${this.typeStyles[this.type()] ?? 'border-purple-400/20 bg-purple-700/10 text-purple-700'}`;
  }

  levelBadgeClass(): string {
    return `${this.badgeBase} ${this.levelStyles[this.level()] ?? 'border-yellow-400/20 bg-yellow-400/10 text-yellow-300'}`;
  }
}