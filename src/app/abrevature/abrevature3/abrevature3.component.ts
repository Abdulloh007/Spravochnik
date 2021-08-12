import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abrevature3',
  templateUrl: './abrevature3.component.html',
  styleUrls: ['./abrevature3.component.css']
})
export class Abrevature3Component implements OnInit {
abElements = [
  {
    title: 'РОР ',
    about: 'Post Office Protocol',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'SMTP',
    about: 'Simple Mail Transfer Protocol',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'LDAP',
    about: 'Lightweight Directory Access Protocol ',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'DHCP',
    about: 'Dynamic Host Configuration Protocol',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'DNS',
    about: 'Domain Name System',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'SPX/IPX',
    about: 'Internetwork Packet eXchange/Sequenced  Packet eXchange',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'OSI',
    about: 'Open Systems Interconnection Basic Reference Model',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'FAT ',
    about: ' File Allocation Table',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'GFS',
    about: 'Google File System',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'HFS',
    about: 'Hierarchical File System',
    title_ru: '',
    about_ru: '',
    image: ''
  },
];
  constructor() { }

  ngOnInit() {
  }

}
