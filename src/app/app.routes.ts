import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'resources',
	},
	{
		path: 'resources',
		loadComponent: () =>
			import(
				'./components/pages/home/home.component'
			).then((m) => m.HomeComponent),
	},
	{
		path: 'dashboard',
		loadComponent: () =>
			import(
				'./components/pages/dashboard/dashboard.component'
			).then((m) => m.DashboardComponent),
	},
];

