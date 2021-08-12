import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abrevature4',
  templateUrl: './abrevature4.component.html',
  styleUrls: ['./abrevature4.component.css']
})
export class Abrevature4Component implements OnInit {
abElements = [
  {
    title: 'MUI ',
    about: 'Multilingual User Interface',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'NTFS',
    about: 'New Technology File System',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'ReFS',
    about: 'Resilient file system',
    title_ru: '',
    about_ru: '',
    image: ''
  },
  {
    title: 'UDF',
    about: 'Universal Disk Format',
    title_ru: '',
    about_ru: '',
    image: ''
  }
];
  constructor() { }

  ngOnInit() {
  }

}
