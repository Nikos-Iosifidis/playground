import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-document-layout',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [Button, CommonModule, RouterModule],
  template: `
    <div class="layout">
      <h2>Document Explorer {{ id }}</h2>
      <p-button label="increase d" (click)="increaseD()" />
      <p-button label="increase q" (click)="increaseQ()" />
      <router-outlet></router-outlet>
      <!-- Only this area changes -->
    </div>
  `,
})
export class DocumentLayoutComponent {
  id = 0;

  constructor(private router: Router) {}
  increaseD() {
    console.log('increase', this.id++);
    this.router.navigate(['layout/documents', this.id]);
  }
  increaseQ() {
    console.log('increase', this.id++);
    this.router.navigate(['layout/qa', this.id]);
  }
}
