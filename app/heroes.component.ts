import { Component, OnInit  } from '@angular/core';

import { Hero } from './classes/hero';

import { HeroDetailsComponent } from '../app/detail/hero-detail.component';

import { HeroService } from './services/hero.service';



@Component({
	selector: 'my-heroes',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],

	directives: [HeroDetailsComponent],


})


export class HeroesComponent implements OnInit {
	title = 'My Heroes';

  constructor(private heroService: HeroService) {}

	// heroes = HEROES;
  heroes: Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

	selectedHero: Hero;
	
	onSelect(hero: Hero) { this.selectedHero = hero;}
 
}