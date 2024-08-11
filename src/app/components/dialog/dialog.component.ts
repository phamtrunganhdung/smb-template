import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';

import { ContentPopular } from '../../models/models';

interface SelectContent {
  id: string;
  value: string;
}
interface ContentForm extends ContentPopular {
  id: string;
  isRequire: boolean;
  errLabel: string;
  formControl: any;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.toggleButton.nativeElement &&
        e.target !== this.menu.nativeElement &&
        e.target !== this.selected.nativeElement
      ) {
        this.isShowSelect = false;
      }
    });
  }
  isShowSelect: boolean = false;
  helpSelected: string = '';
  onSelect(value: string) {
    this.helpSelected = value;
  }
  selectContent: SelectContent[] = [
    {
      id: 'help1',
      value:
        'Vraag Een Gratis Proefperiode Voor Unify Phone OpenScape business',
    },
    {
      id: 'help2',
      value: ' Neem Contact Op Met Een Deskundige',
    },
  ];

  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('selected') selected!: ElementRef;

  renderSelectedContent(idIn: string): string {
    const content = this.selectContent.find(
      (x: SelectContent) => x.id === idIn
    );
    return content?.value || '-Hoe kunnen we u helpen? *-';
  }

  formInfo = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    company: new FormControl<string>('', [Validators.required]),
    phone: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    help: new FormControl<string>('', [Validators.required]),
    note: new FormControl<string>('', [Validators.required]),
    acceptPolicy: new FormControl<boolean>(false),
  });

  contentFormInput: ContentForm[] = [
    {
      id: 'name',
      label: 'Naam',
      isRequire: true,
      errLabel: 'Dit veld dient u inte vullen om veder tegann',
      formControl: this.formInfo.controls.name,
    },
    {
      id: 'company',
      label: 'Bedrijf',
      isRequire: true,
      errLabel: 'Dit veld dient u inte vullen om veder tegann',
      formControl: this.formInfo.controls.company,
    },
    {
      id: 'phone',
      label: 'Telefoonnummer',
      isRequire: true,
      errLabel: 'Dit veld dient u inte vullen om veder tegann',
      formControl: this.formInfo.controls.phone,
    },
    {
      id: 'email',
      label: 'E-mail',
      isRequire: true,
      errLabel: 'Dit veld dient u inte vullen om veder tegann',
      formControl: this.formInfo.controls.email,
    },
  ];
  onSelectFormClick() {
    this.isShowSelect = true;
  }
  onSubmit() {
    this.formInfo.value.help = this.renderSelectedContent(this.helpSelected);
    console.log(this.formInfo.value);
  }
}
