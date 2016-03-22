import {Component, ViewEncapsulation} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';

// import {AboutCmp} from '../../about/components/about';
import {SearchCmp} from '../../search/components/search';
import {HerosCmp} from '../../heros/components/heros';
import {HeroDetailCmp} from '../../heros/components/hero-detail';
// import {NameList} from '../../shared/services/name_list';
import {DashboardCmp} from '../../dashboard/components/dashboard';

// Services
import {HeroService} from '../../heros/components/hero-service';
import {UserService} from '../../search/components/user-service';
import {RepositoryService} from '../../search/components/repository-service';
import {LanguageService} from '../../search/components/language-service';

import 'rxjs/Rx';

@Component({
  selector: 'app',
//   viewProviders: [],
  moduleId: module.id,
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES],
  providers: [
      ROUTER_PROVIDERS,
      HeroService,
      UserService,
      RepositoryService,
      LanguageService
  ]
})
@RouteConfig([
//   { path: '/about', name: 'About', component: AboutCmp },
  { path: '/search', name: 'Search', component: SearchCmp },
  { path: '/heros', name: 'Heros', component: HerosCmp },
  { path: '/dashboard', name: 'Dashboard', component: DashboardCmp, useAsDefault: true },
  { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailCmp }
])
export class AppCmp {}
