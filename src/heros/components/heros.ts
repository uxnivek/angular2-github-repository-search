import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from './hero';
import {HeroDetailCmp} from './hero-detail';
import {HeroService} from './hero-service';

@Component({
    selector: 'hero',
    templateUrl: 'heros/components/heros.html',
    styleUrls: ['heros/components/heros.css'],
    directives: [HeroDetailCmp]
})
export class HerosCmp implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
