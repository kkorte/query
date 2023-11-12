import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from './star-wars.service';
import { CharacterListItemComponent } from './character-list-item.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-film',
  template: `
    @if (query().isPending) {
      <p>Loading...</p>
    } @else {
      <h1 class="mat-headline-2">{{ query().data!.title }}</h1>
      <p>
        {{ query().data!.opening_crawl }}
      </p>
      
      <h2 class="mat-headline-3">Characters</h2>
      <mat-nav-list>
        @for (characterId of query().data!.characters; track characterId) {
          <app-character-list-item [characterId]="characterId" />
        }
      </mat-nav-list>
    }
  `,
  standalone: true,
  imports: [MatListModule, CharacterListItemComponent],
})
export class FilmComponent {
  #service = inject(StarWarsService);
  #activatedRoute = inject(ActivatedRoute);
  #filmIdSignal = signal(this.#activatedRoute.snapshot.paramMap.get('filmId'));

  query = this.#service.getFilmById(this.#filmIdSignal);
}