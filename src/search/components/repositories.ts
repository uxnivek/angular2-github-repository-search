import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Repository} from './repository';
import {Language} from './language';
import {LanguageService} from './language-service';
import {PieChart} from './pie-chart';

@Component({
  selector: 'repositories',
  moduleId: module.id,
  templateUrl: './repositories.html',
  viewProviders: [HTTP_PROVIDERS],
  directives: [CORE_DIRECTIVES],
  inputs: ['repositories']
})

export class RepositoriesCmp {

  constructor(
    private http: Http,
    private languageService: LanguageService
  ) { }

  getRepositoryLanguages(repository: Repository) {
    repository.showDetail = !repository.showDetail;

    if (repository.showDetail) {
      this.languageService.getLanguages(repository)
      .subscribe(
        languages => this._drawPieChart(<Language[]> languages, repository),
        () => console.log('After fetch languages')
      );
    }
  }

  private _drawPieChart(languages: Language[], repository: Repository) {
    let pieChart = new PieChart(languages, repository);
    pieChart.draw();
  }
}
