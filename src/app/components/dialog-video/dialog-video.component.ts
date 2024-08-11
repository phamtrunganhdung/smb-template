import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-video',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-video.component.html',
})
export class DialogVideoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
