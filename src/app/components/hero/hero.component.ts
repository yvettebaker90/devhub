import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    selectedTag: string = '';

    tags = [
        { name: 'React', active: false },
        { name: 'TypeScript', active: false },
        { name: 'System Design', active: false },
        { name: 'Career', active: false }
    ];

    selectTag(tagName: string): void {
        this.selectedTag = this.selectedTag === tagName ? '' : tagName;
        this.tags = this.tags.map(tag => ({
            ...tag,
            active: tag.name === tagName
        }));
    }
}