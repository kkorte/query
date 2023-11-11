import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-film',
    template: `film`,
    standalone: true,
})

export class FilmComponent {}