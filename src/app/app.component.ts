import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Button } from 'primeng/button';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { $dt } from '@primeng/themes';
import { FormsModule } from '@angular/forms';
import { MiddleStateToggleDirective } from './middle-state.directive';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    Button,
    ToggleSwitch,
    FormsModule,
    MiddleStateToggleDirective,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground';

  toggleValue: boolean | null = null;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log($dt('blue.500').value);
  }

  navigate() {
    this.router.navigate(['layout/documents', 1]);
  }
}
