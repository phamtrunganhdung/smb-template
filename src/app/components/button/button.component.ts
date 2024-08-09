import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() secondary: boolean = false;
  @Input() class!: string;
  @Input() title!: string;
  @Input() onClick!: () => void;
}
