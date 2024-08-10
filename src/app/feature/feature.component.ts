import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { ButtonComponent } from '../components/button/button.component';
import { ContentPopular, ContentTypeList } from '../models/models';

interface ContentForm extends ContentPopular {
  isRequire: boolean;
  errLabel: string;
}

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  content1s: ContentTypeList = {
    label:
      'Het succes van elk bedrijf, groot of klein, hangt af van de effectiviteit van de communicatie. OpenScape Business biedt de eenvoudigste weg naar het uitrollen van volledige, IP-gebaseerde unified communications over het hele netwerk van gebruikers:',
    children: [
      {
        label:
          'Onafhankelijk gebruik van uw bestaande telefonie-infrastructuur - of dit nu klassieke telefonie, IP of DECT is',
      },
      {
        label:
          'Eenvoudig te gebruiken, volledig schaalbare en kosteneffectieve oplossing',
      },
      {
        label:
          'Kostenbesparende Voice over IP (VoIP) van hoge kwaliteit op bestaande netwerken',
      },
      {
        label:
          'Flexibele implementatiemodellen - op locatie, gehost, in de cloud of gecombineerd',
      },
      {
        label:
          'Pure software-gebaseerde optie met OpenScape Business S voor private cloud implementatie',
      },
      {
        label:
          'Permanente (CAPEX) of abonnementsgebaseerde (OPEX) gebruiksmodellen',
      },
      {
        label:
          'UC beschikbaar op de belangrijkste mobiele platforms; ondersteuning voor Android en Apple iOS',
      },
      {
        label: 'Integratiemogelijkheden met Microsoft 365 en Microsoft Teams',
      },
      {
        label:
          'Go Hybrid: voeg cloud-gebaseerde diensten toe voor samenwerking (video, screensharing, telefonie)',
      },
    ],
  };
  content2s: ContentTypeList = {
    label: 'Belangrijkste functies van OpenScape Business:',
    children: [
      {
        label: 'Mobiele interface voor smartphones, tablets en laptops',
      },
      {
        label: 'Contact center mogelijkheden',
      },
      {
        label: 'Zakelijke Voicemail',
      },
      {
        label: 'Web-Collaboration',
      },
      {
        label: 'Instant Messaging',
      },
      {
        label: 'Live gesprekopname',
      },
      {
        label: 'Geïntegreerde aanwezigheidsfunctie',
      },
      {
        label: 'Gespreksoverzicht',
      },
      {
        label: 'Toegang tot adresboek',
      },
      {
        label: 'Drag & Drop conferentie',
      },
      {
        label: 'Pop-up gesprekken',
      },
      {
        label: 'Persoonlijke Auto-Attendant',
      },
      {
        label: 'In Groupware geïntegreerde UC',
      },
      {
        label: 'Microsoft Teams integratie',
      },
    ],
  };
  content3s: ContentTypeList = {
    label:
      'De perfecte aanvulling op het OpenScape platform van uw keuze is Unify Phone. Een soft client-applicatie die u onderweg toegang geeft tot VoIP-telefoniemogelijkheden voor Microsoft Teams! Unify Phone is een soft phone plug-in voor OpenScape-platforms en Microsoft Teams en biedt:',
    children: [
      {
        label: 'Toegang tot telefoniemogelijkheden zonder premium belplannen',
      },
      {
        label: 'Naadloze combinatie van apparaten en platforms',
      },
      {
        label:
          'Veilige, eenvoudige en kosteneffectieve toegang tot mobiel en hybride werken',
      },
    ],
  };

  contentFormInput: ContentForm[] = [
    {
      label: 'Naam',
      isRequire: true,
      errLabel: 'Dit veld dient u inte vullen om veder tegann',
    },
    {
      label: 'Bedrijf',
      isRequire: true,
      errLabel: 'Dit veld dient u inte vullen om veder tegann',
    },
    {
      label: 'Telefoonnummer',
      isRequire: true,
      errLabel: 'Dit veld dient u inte vullen om veder tegann',
    },
    {
      label: 'E-mail',
      isRequire: true,
      errLabel: 'Dit veld dient u inte vullen om veder tegann',
    },
  ];
  isShowSelect: boolean = false;
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  onSelectFormClick() {
    this.isShowSelect = !this.isShowSelect;
  }

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.toggleButton.nativeElement &&
        e.target !== this.menu.nativeElement
      ) {
        this.isShowSelect = false;
      }
    });
  }
}
