import {Component} from 'angular2/core';

@Component({
    selector: 'user-details',
    // templateUrl: './user-details.html'
    template: `
        <div *ngIf="user">
            <a href="{{user.html_url}}" target="_blank" class="vcard-avatar">
                <img class="avatar" src="{{user.avatar_url}}&amp;s=200" width="200" height="200">
            </a>
            <h1 class="vcard-names">
                <span class="vcard-fullname" itemprop="name">{{user.name}}</span>
                <span class="vcard-username" itemprop="additionalName">{{user.login}}</span>
            </h1>
            <p><a class="email" href="mailto:{{user.email}}">{{user.email}}</a></p>
        </div>`
})
export class UserDetails {}
