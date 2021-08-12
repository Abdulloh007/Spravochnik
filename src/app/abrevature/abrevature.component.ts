import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abrevature',
  templateUrl: './abrevature.component.html',
  styleUrls: ['./abrevature.component.css']
})
export class AbrevatureComponent implements OnInit {
  selectedIndex = false;
  abElements = [{
    title: 'TCP/IP',
    about: 'Transmission Control Protocol/Internet Protocol',
    title_ru: '',
    about_ru: '',
    image: ''
  },
    {
      title: 'WWW',
      about: 'World Wide Web',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'FTP',
      about: 'File Transfer Protocol',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'HTML',
      about: 'Hyper Text  Markup Language',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'OLE',
      about: 'Object Linking and Embedding ',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'ОЗУ',
      about: 'оперативное запоминающее устройство',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'URL',
      about: 'Universal Uniform Recourse Locator',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'HTPP',
      about: 'Hyper Text Transfer Protocol',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'PDA',
      about: 'Personal Digital Assistant',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'GIF ',
      about: 'graphics interchange format',
      title_ru: '',
      about_ru: '',
      image: ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
