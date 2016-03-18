import {Component} from 'angular2/core';

import {UserInput} from './user-input/user-input';
import {UserDetails} from './user-details/user-details';
import {RepoList} from './repo-list/repo-list';

@Component({
  moduleId: module.id,
  template: `
    <user-input></user-input>
    <user-details></user-details>
    <repo-list></repo-list>
    `,
//   viewProviders: [UserInput, UserDetails, RepoList],
  directives: [UserInput, UserDetails, RepoList]
})

export class SearchCmp {
    // constructor(@Inject(UserInput) userInput) {
    //     console.log(userInput);
    // }
}
