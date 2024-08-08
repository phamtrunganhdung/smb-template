import { Component } from '@angular/core';

import { ContentTypeList } from '../models/models';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [],
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
}
