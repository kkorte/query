import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-characters',
    template: `characters`,
    standalone: true,
})

export class CharactersComponent {}