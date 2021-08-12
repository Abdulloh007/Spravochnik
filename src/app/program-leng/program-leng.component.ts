import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-leng',
  templateUrl: './program-leng.component.html',
  styleUrls: ['./program-leng.component.css']
})
export class ProgramLengComponent implements OnInit {

  selectedIndex = false;
  PLElement = [
    {
      title: 'Таъминоти программавӣ ("софт")',
      about: 'Маҷмӯи программаҳои компютериро меноманд.',
      title_ru: '',
      about_ru: ''
  },
    {
      title: 'Барнома',
      about: 'Пайдарпайии дастурҳои барои компютер фаҳмобударо меноманд.',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Барномасозӣ',
      about: 'Раванди навиштани программаро барои компютер меноманд.',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Aspect C++',
      about: 'парадигмаи барномасозӣ мебошад, ки дар  ғояи тақсимоти функсионалӣ барои беҳтарии тақсимоти баномаҳо ба модулҳо асос ёфтааст. ',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Aspect JS',
      about: 'расширенияи ба аспект нигаронидашуда забони Java буда, аз ҷониби ширкати PARC коркард шудааст. Забони мазкур дар лоиҳаи Eclipse Foundation дар алоҳидагӣ, ҳам дар таркиби коркарди Eclipse дастрас аст. Забони барномарезии мазкур ибтидои барномарезии ба аспект нигаронидашуда мебошад, зеро барои истифодабаранда  қулай ва осон аст. ',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Aspect Lua ',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'JOVIAL',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'PL/M ',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'QBasic ',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Rexx ',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Active Oberon ',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Алго́л ',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Скрипт, сенарий ',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'HTML',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'Javascript',
      about: '',
      title_ru: '',
      about_ru: ''
    },
    {
      title: 'C++',
      about: '',
      title_ru: '',
      about_ru: ''
    },


  ];
  constructor() { }

  ngOnInit() {
  }

}
