import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero-service';

@Component({
  selector: 'hero-detail',
  inputs: ['hero'],
  templateUrl: 'heros/components/hero-detail.html',
  styleUrls: ['heros/components/hero-detail.css']
})
export class HeroDetailCmp implements OnInit {
    hero: Hero;
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
        .then(hero => this.hero = hero);
    }

    goBack() {
       window.history.back();
    }
}
