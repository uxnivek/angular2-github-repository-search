import {Component, OnInit} from 'angular2/core';

import {Hero} from './hero';
import {HeroDetailCmp} from './hero-detail';
import {HeroService} from './hero-service';

@Component({
    selector: 'hero',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
    <li *ngFor="#hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
    directives: [HeroDetailCmp]
})
export class HerosCmp implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private _heroService: HeroService) { }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }
}
