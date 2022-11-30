import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'list',
    title: 'Templates list',
    loadComponent: async () =>
      (await import('./template-list/template-list.component')).TemplateListComponent,
  },
];
