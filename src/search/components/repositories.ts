import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

import {Repository} from './repository';
import {LanguageService} from './language-service';
import {PieChart} from './pie-chart';

@Component({
  selector: 'repositories',
  templateUrl: 'search/components/repositories.html',
  styleUrls: ['search/components/repositories.css'],
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
        languages => this._drawPieChart(languages, repository)
      );
    }
  }

  private _drawPieChart(languages, repository: Repository) {
    let pieChart = new PieChart(languages, repository);
    pieChart.draw();
  }
}
