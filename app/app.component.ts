import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './services/hero.service';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<a [routerLink]="['/heroes']">Heroes</a>
	
	<router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
  	providers: [HeroService]


})


export class AppComponent {
	title = 'Super Heroes';
}