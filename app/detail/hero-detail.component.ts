import { Component, Input } from '@angular/core';

import { Hero } from '../classes/hero';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/detail/hero-detail.component.html'

})     

export class HeroDetailsComponent {
	@Input()
	hero: Hero
}