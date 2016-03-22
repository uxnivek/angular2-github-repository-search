import {User} from './user';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/interval';

@Injectable()
export class UserService {
  user: User;
  private _githubEndPoint = 'https://api.github.com/users/';

  constructor(private http: Http) { }

  getUser(username: string) {
    let userUrl = this.getUserUrl(username);
    return this.http.get(userUrl)
      // Call map on the response observable to get the parsed people object
      .map(res => <User> res.json())
      .catch(this.handleError);
  }

  private getUserUrl(username) {
    return this._githubEndPoint + username;
  }

  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
