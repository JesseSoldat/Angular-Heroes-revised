import { Component } from '@angular/core';

import { HeroesComponent } from './heroes.component';

import { HeroService } from './services/hero.service';

@Component({
	selector: 'my-app',
	template: `<h1>App</h1><my-heroes></my-heroes>`,
	directives: [HeroesComponent],
  	providers: [HeroService]


})


export class AppComponent {}