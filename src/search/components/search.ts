import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {User} from './user';
import {UserService} from './user-service';
import {UserDetailCmp} from './user-detail';

import {Repository} from './repository';
import {RepositoryService} from './repository-service';
import {RepositoriesCmp} from './repositories';

@Component({
  templateUrl: 'search/components/search.html',
  styleUrls: ['search/components/search.css'],
  directives: [CORE_DIRECTIVES, UserDetailCmp, RepositoriesCmp]
})

export class SearchCmp {
  user: User;
  userRepositories: Repository[];
  errorMessage: any;

  constructor(
    private _userService: UserService,
    private _repositoryService: RepositoryService
    ) { }

  searchUser(username) {
    if (username) {
      this._getUserDetail(username);
      this._getUserRepositories(username);
    }
  }

  private _getUserDetail(username) {
    return this._userService.getUser(username)
      .subscribe(
      user => {
        this.user = user;
        console.log(this.user);
      },
      error => {
        this.errorMessage = <any>error;
        this._logError();
      });
  }

  private _getUserRepositories(username) {
    return this._repositoryService.getRepositories(username)
      .subscribe(
      repositories => {
        this.userRepositories = repositories;
        console.log(this.userRepositories);
      },
      error => {
        this.errorMessage = <any>error;
        this._logError();
      });
  }

  private _logError() {
    console.log(this.errorMessage);
  }
}
