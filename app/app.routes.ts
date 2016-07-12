import { provideRouter, RouterConfig } from '@angular/router';

import { DashComponent } from './dash.component';

const routes: RouterConfig = [
	
	{
		path: 'dash',
		component: DashComponent
	},
	
	{
		path: '',
		redirectTo: '/dash',
		pathMatch: 'full'
	}
];


export const APP_ROUTER_PROVIDERS = [
provideRouter(routes)
];