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
				'./features/resources/pages/resource-library/resource-library.page'
			).then((m) => m.ResourceLibraryPageComponent),
	},
];
