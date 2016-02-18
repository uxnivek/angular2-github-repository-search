import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'user',
  moduleId: module.id,
  templateUrl: './user.html',
  viewProviders: [HTTP_PROVIDERS],
  directives: [CORE_DIRECTIVES]

})

export class UserCmp {
  user;
  repos;
  constructor(public http: Http) { }

  searchUser(username) {
    event.preventDefault();
    var userUrl = this.getUserUrl(username);
    this.http.get(userUrl)
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the component
      .subscribe(
        user => this.user = user,
        err => console.log(err),
        () => console.log('After fetch user')
      );

    var userReposUrl = this.getUserReposUrl(username);
    this.http.get(userReposUrl)
      .map(res => res.json())
      .subscribe(
        repos => this.repos = repos,
        () => console.log('After fetch repositories')
      );
  }

  getRepoLangs(repository) {
    console.log(repository);
  }

  getUserUrl(username) {
    return 'https://api.github.com/' + 'users/' + username;
  }

  getUserReposUrl(username) {
    return 'https://api.github.com/' + 'users/' + username + '/repos';
  }

}
