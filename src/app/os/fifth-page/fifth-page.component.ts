import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../../search-service.service';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {

  constructor(private service: SearchServiceService) { }
  selectedIndex = false;

  search = '';
  ngOnInit() {
    this.search = this.service.search;
  }
  osElements = [

    {
      title: 'System32',
      about: 'System32 – ин папкаи системавии ҳатмӣ дар СО Microsoft Windows мебошад. Он одатан чунин суроға дорад: ' +
        ' «C:/Windows/System32» или «C:/Winnt/system32».',
      image: './assets/images.OS/46.jpg'
    },
    {
      title: 'UDF',
      about: 'UDF (Universal Disk Format, формати дискии универсалӣ) – ин системаи файлӣ, ки аз ҷониби  Optical Storage Technology ' +
        'Association барои нигоҳдории файлҳо дар дискҳои оптикӣ  (CD/DVD) пешбинӣ шудааст.',
      image: './assets/images.OS/47.jpg'
    },
    {
      title: 'Uninstall',
      about: 'Uninstall (деинсталлировать) – раванди хориҷкунии барномаҳо ва файлҳои ба он алоқаманд аз диски сахти компютер мебошад.' +
        ' Функсияи Uninstall аз хориҷкунии одӣ аз он фарқ мекунад, ки бехатар ва самаранок ҳамаи файлҳоро хориҷ мекунад. ' +
        'Хориҷкунии одӣ танҳо қисми барнома ё файл/папкаи интихобшударо хориҷ мекунаду халос. ',
      image: './assets/images.OS/48.jpg'
    },
    {
      title: 'Win.ini',
      about: 'Win.ini – ин файли инитсиализатсияи дар  Microsoft Windows 3.x, 9х барои нигоҳдории сохтори настройкаҳои  Windows,' +
        ' ба монанди драйверҳои коммуникастионӣ, обойҳо, заставкаҳо, забон ва шрифтҳо мебошад. Файли win.ini дар каталоги ' +
        ' «C:/Windows» ҷойгир аст. Агар он зарар ёбад, ё мавҷуд надошта бошад,  Windows кор намекунад ё хатогӣ медиҳад. ',
      image: './assets/images.OS/49.jpg'
    },
    {
      title: 'Win32',
      about: 'Win32 – ин маҷмӯи  (интерфейси коркарди замимаҳо)-и Microsoft Windows, ки барои коркарди замимаҳои  ' +
        '32-разрядӣ истифода мешавад. Номҳои дигари он: Windows API, WinAPI мебошад. ',
      image: './assets/images.OS/50win32.jpg'
    },
    {
      title: 'Windows Aero',
      about: 'Windows Aero – ин интерфейси графикии истифодабаранда  (GUI), ки аввалин маротиба дар системаи оператсионии' +
        ' Windows Vista истифода шудааст. ',
      image: './assets/images.OS/51.jpg'
    },
    {
      title: 'Windows Virtual PC ',
      about: 'Windows Virtual PC – ин версияи охирини технология, ки ба истифодабаранда имконияти ба таври параллелӣ' +
        ' ба кор сар додани якчанд системаҳои оператсиониро дар як компютери фардӣ дорад. Ё ба кор сар додани якчанд замимаҳоро ' +
        'дар муҳити виртуалии Windows дорад. Ин функсия танҳо дар  Windows 7 кор мекунад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/52.jpg'
    },
    {
      title: 'Zorin ё Zorin OS',
      about: 'Zorin или Zorin OS – ин системаи оператсионӣ дар асоси  Ubuntu Linux мебошад. Он аввалин маротиба июли соли' +
        ' 2009 пайдо шудааст. Zorin системаи оператсионӣ барои истифодабарандагони системаи оператсионии  Windows мебошад.' +
        ' Он интерфейси истифодабарандаи ба  Windows Explorer монандро пешниҳод намуда, имконияти Windows- ро аз "қуттӣ" бо ёрии  ' +
        ' WINE ва PlayOnLinux аз нав ба кор сар доданро дорад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'Автозагрузка',
      about: 'ин функсияи  Windows, ки ба таври автоматӣ дилхоҳ таъминоти барномавиро (барнома ё утилитро) ҳангоми загрузкаи компютер,' +
        ' аниқтараш, баъди загрузкаи компютер ба кор сар медиҳад.  ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/55.jpg'
    },
    {
      title: 'Автозапуск',
      about: 'ин функсия аввалин маротиба дар  Microsoft Windows 95 пайдо шуда, имконияти ба кор андохтани компакт-дискҳо ва ' +
        'нигоҳдорандаҳоро ҳангоми пайвасткунӣ ба компютер дорад.  ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/55.jpg'
    },
  ];

}
