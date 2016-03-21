import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../heros/components/hero';
import { HeroService } from '../../heros/components/hero-service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard/components/dashboard.html',
  styleUrls: ['dashboard/components/dashboard.css']
})
export class DashboardCmp implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }

}
