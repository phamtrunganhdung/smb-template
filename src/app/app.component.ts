import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FeatureComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'smb-template';
}
