import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

import {PieChart} from '../../../shared/services/pie-chart';

@Component({
  selector: 'repo-list',
  moduleId: module.id,
  templateUrl: './repo-list.html',
  viewProviders: [HTTP_PROVIDERS],
  directives: [CORE_DIRECTIVES]
})

export class RepoList {
  repos: Array<Object>;

  constructor(public http: Http) {
    console.log('repo list constructed', this.repos);
  }

  setRepos(repos: Array<Object>) {
    this.repos = repos;
  }

  getRepoLangs(repo) {
    var userReposUrl = this.getRepositoryLangsUrl(repo);
    this.http.get(userReposUrl)
      .map(res => res.json())
      .subscribe(
        langs => this.drawPieChart(langs, repo),
        () => console.log('After fetch languages')
      );
  }

  drawPieChart(langs, repo) {
    var pieChart = new PieChart(langs, repo.id);
    pieChart.draw();
  }

  getRepositoryLangsUrl(repo) {
    return 'https://api.github.com/' + 'repos/' + repo.owner.login + '/' + repo.name + '/languages';
  }


}
