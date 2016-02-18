import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../../home/components/home';
import {AboutCmp} from '../../about/components/about';
import {UserCmp} from '../../user/components/user';
import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  moduleId: module.id,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, name: 'Home' },
  { path: '/about', component: AboutCmp, name: 'About' },
  { path: '/search', component: UserCmp, name: 'Search' }
])
export class AppCmp {}
