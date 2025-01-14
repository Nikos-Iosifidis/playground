import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { $dt } from '@primeng/themes';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground';


  ngOnInit() {
    console.log($dt('blue.500').value);
  }
}
