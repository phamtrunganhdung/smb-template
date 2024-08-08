import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FeatureComponent } from './feature/feature.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FeatureComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'smb-template';
}
