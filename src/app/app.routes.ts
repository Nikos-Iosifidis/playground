import { Routes } from '@angular/router';
import { DocumentLayoutComponent } from './DocumentLayoutComponent';
import { DocumentExplorerComponent } from './DocumentExplorerComponent';
import { QaExplorerComponent } from './QaExplorerComponent';

export const routes: Routes = [
  {
    path: 'layout',
    component: DocumentLayoutComponent,
    children: [
      { path: '', redirectTo: 'root', pathMatch: 'full' }, // Default folder
      { path: 'documents/:folderId', component: DocumentExplorerComponent },
      { path: 'qa/:folderId', component: QaExplorerComponent },
    ],
  },
  { path: '**', redirectTo: 'documents/root' }, // Handle unknown paths
];
