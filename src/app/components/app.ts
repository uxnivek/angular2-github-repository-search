import {Component, ViewEncapsulation} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';

import {HomeCmp} from '../../home/components/home';
import {AboutCmp} from '../../about/components/about';
import {SearchCmp} from '../../search/components/search';
import {HerosCmp} from '../../hero/components/heros';
import {HeroService} from '../../hero/components/hero-service';
import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'app',
//   viewProviders: [],
  moduleId: module.id,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES],
  providers: [
      ROUTER_PROVIDERS,
      HeroService,
      NameList
  ]
})
@RouteConfig([
  { path: '/', name: 'Home', component: HomeCmp },
  { path: '/about', name: 'About', component: AboutCmp },
  { path: '/search', name: 'Search', component: SearchCmp },
  { path: '/Heros', name: 'Heros', component: HerosCmp }
])
export class AppCmp {}
