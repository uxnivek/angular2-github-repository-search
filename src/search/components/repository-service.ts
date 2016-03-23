import {Repository} from './repository';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RepositoryService {
  repositories: Repository[];
  private _githubEndPoint = 'https://api.github.com/users/';

  constructor(private http: Http) {}

  getRepositories(username: string) {
    let userReposUrl = this._getUserReposUrl(username);
    return this.http.get(userReposUrl)
      .map(res => <Repository[]> res.json())
      .do(data => console.log('repositories:', data)) // eyeball results in the console
      .catch(this.handleError);
  }

  private _getUserReposUrl(username) {
    return this._githubEndPoint + username + '/repos';
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
