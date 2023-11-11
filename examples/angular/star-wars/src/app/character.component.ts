import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-character',
    template: `character`,
    standalone: true,
})

export class CharacterComponent {}