import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../../search-service.service';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
  constructor(private service: SearchServiceService) { }
  selectedIndex = false;

  search = '';
  ngOnInit() {
    this.search = this.service.search;
  }
  osElements = [
    {
      title: 'Msconfig ё конфигуратсияи система',
      about: 'Msconfig ё конфигуратсияи система – ин замима дар системаи оператсионии  Windows, ки аавалин маротиб бо  Windows 98 ' +
        'пайдо шудааст. Msconfig барои настройкаи параметрҳои ба кор сар додани компютер ва барномаҳо барои кушодани сервисҳо истифода ' +
        'мешавад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/34mckonfig.jpg'
    },
    {
      title: 'MUI',
      about: 'MUI (Multilingual User Interface, интерфейси бисёрзабонаи истифодабаранда) – ин технологияе,' +
        ' ки аз болои версияи англисии  Microsoft Windows кор карда, имконияти истифодаи забонҳои гуногунро дорад. ' +
        'Ҳамин тарз, истифодабаранда метавонад барои сабтҳои гуногуни худ забони интерфейси худро истифода барад.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/35mui.jpg'
    },
    {
      title: 'NTFS',
      about: 'NTFS (аббревиатура аз New Technology File System) – ин системаи файлӣ (системаи ташкили файлҳо), ' +
        'одатан дар диски сахти компютерҳо таҳти идораи  Microsoft Windows кор мекунад.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/37ntfs.jpg'
    },
    {
      title: 'PnP',
      about: 'PnP аз Plug-and-Play (пайваст шав ва бозӣ намо) – ин имкониятидарёфтан ва ба таври автоматӣ созкунии таъминоти аппаратии' +
        ' компютер бе талаби амалҳои физикӣ аз истифодабаранда мебошад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'Program File',
      about: 'Program Files – ин папкае, ки дар он барномаҳои ба компютер сабтшуда нигоҳ дошта мешавад. Аввалин маротиба он дар' +
        '  Microsoft Windows 95 кор карда, дар ҳамаи версияҳои ояндаи Windows насб шудааст. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/38prog.jpg'
    },
    {
      title: 'ReadyBoost',
      about: 'ReadyBoost – ин технологияи ширкати  Microsoft, ки имконияти истифодаи флешкаҳо-нигоҳдорандаҳоро барои баландбардории' +
        ' иқтидори компютер дошта,  онҳоро ба сифати кэш-хотира истифода мекунад. Аввалин маротиба ин функсия дар  Windows Vista истифода' +
        ' шудааст. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/38plug.jpg'
    },
    {
      title: 'ReFS',
      about: 'ReFS  Resilient file system, системаи файлии чандирӣ) – ин системаи файлӣ аз ҷониби ширкати  Microsoft коркард шуда, ' +
        'дар системаи оператсионии  Windows Server 2012 насб шудааст. Он ҳамчунин дар бета-версияи Windows 8 ва 8.1. истифода мешавад.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/42refs.jpg'
    },
    {
      title: 'Service Pack',
      about: 'Service Pack сокращенно SP – это большой пакет обновлений содержащий несколько исправлений и обновлений для операционных ' +
        'систем Microsoft Windows. Такие пакеты помогают решить проблемы связанные с программным и аппаратным обеспечением ОС Windows.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/43sp.jpg'
    },
    {
      title: 'Sysedit ',
      about: 'Sysedit – ин  утилити ба таркиби системаҳои оператсионии  Microsoft Windows воридшаванда аст. Он имконият медиҳад,' +
        ' ки системаҳои файлии зарурӣ  (system.ini, win.ini, autoexec.bat и config.sys) аз назар гузаронида шуда, таҳлил карда шавад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/44.jpg'
    },
    {
      title: 'System.ini',
      about: 'System.ini – это файл конфигурации используемый в Microsoft Windows 3.x, Windows 95 и Windows 98 для хранения' +
        ' на настроек компьютера, таких как шрифты, клавиатура, язык и других параметров. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/45.jpg'
    },
  ];



}
