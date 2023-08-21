import { Component } from '@angular/core';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent {
  // public selectedValue: string

  links = [
    'https://cdn-icons-png.flaticon.com/512/733/733635.png',
    'https://cdn-icons-png.flaticon.com/512/3128/3128208.png',
    'https://cdn-icons-png.flaticon.com/512/1384/1384031.png',
    'https://cdn-icons-png.flaticon.com/512/3128/3128219.png',
    'https://cdn-icons-png.flaticon.com/512/152/152810.png',
  ];

  utils = [
    {
      img: 'location_on',
      text: "Track Order"
    },
    {
      img: 'shopping_basket',
      text: "Shop"
    },
    {
      img: 'settings',
      text: "Settings"
    }
  ];

  languages: Language[] = [
    { value: 'english-0', viewValue: 'English' },
    { value: 'romanian-1', viewValue: 'Romanian' },
    { value: 'russian-2', viewValue: 'Russian' },
  ];
}
