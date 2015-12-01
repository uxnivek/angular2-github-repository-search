import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
// import {formDirectives} from 'angular2/form';
// import {Http, ConnectionBackend, RequestOptions} from 'angular2/http';

@Component({
  selector: 'user-panel',
  directives: [FORM_DIRECTIVES],
  templateUrl: './components/user-panel/user-panel.html'
  // providers: [Http, ConnectionBackend, RequestOptions],
})


export class UserPanel {
  userModel;
  // users:

  userUrl (username) {
		return 'https://api.github.com/' + 'users/' + username;
	}

	userReposUrl (username) {
		return 'https://api.github.com/' + 'users/' + username + '/repos';
	}

  searchUser () {
    // event.preventDefault();
    // this.http.get(this.userUrl(username))
    //   // Call map on the response observable to get the parsed people object
    //   // .map(res => res.json())
    //   // Subscribe to the observable to get the parsed people object and attach it to the
    //   // component
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    console.log(this.userModel);
    this.userModel = '';
  }

}
