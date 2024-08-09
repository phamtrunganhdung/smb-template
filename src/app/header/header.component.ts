import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isShowMenuDetail: boolean = false;

  onShowMenuDetail() {
    this.isShowMenuDetail = !this.isShowMenuDetail;
  }
}
