import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'user-input',
    template: `
        <form (submit)="searchUser(username)">
            <input [(ngModel)]="username" />
            <button type="submit">Search</button>
        </form>`,
    viewProviders: [Http, HTTP_PROVIDERS],
    directives: [CORE_DIRECTIVES]
})

export class UserInput {
  user: Object;

  constructor(
    public http: Http
  ) {}

  searchUser(username) {
    event.preventDefault();
    let userUrl = this.getUserUrl(username);
    this.http.get(userUrl)
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the component
      .subscribe(
        user => this.user = user,
        err => console.log(err),
        () => console.log('After fetch user')
      );

    let userReposUrl = this.getUserReposUrl(username);
    this.http.get(userReposUrl)
      .map(res => res.json())
      .subscribe(
        // repos => this.showRepos(repos), //this.repos = repos,
        () => console.log('After fetch repositories')
      );
  }

//   showRepos(repos) {
//       console.log(repos);
//     this.repoList.setRepos(repos);
//   }

  getUserUrl(username) {
    return 'https://api.github.com/' + 'users/' + username;
  }

  getUserReposUrl(username) {
    return 'https://api.github.com/' + 'users/' + username + '/repos';
  }
}
