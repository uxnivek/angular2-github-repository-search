// import {Language} from './language';
import {Repository} from './repository';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LanguageService {
  // languages: Array<Object>;
  private _githubEndPoint = 'https://api.github.com/repos/';

  constructor(
    private http: Http
    ) { }

  getLanguages(repository: Repository) {
    let languagesUrl = this._getLanguagesUrl(repository);
    return this.http.get(languagesUrl)
      // Call map on the response observable to get the parsed people object
      .map(languages => languages.json())
      .do(data => console.log('languages:', data)) // eyeball results in the console
      .catch(this.handleError);
  }

  private _getLanguagesUrl(repository: Repository) {
    return this._githubEndPoint + repository.owner.login + '/' + repository.name + '/languages';
  }

  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
