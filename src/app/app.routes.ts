import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

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
				'./features/resources/pages/resource-library/resource-library.page'
			).then((m) => m.ResourceLibraryPageComponent),
	},
];
