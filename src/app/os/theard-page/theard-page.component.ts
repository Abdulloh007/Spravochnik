import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../../search-service.service';

@Component({
  selector: 'app-theard-page',
  templateUrl: './theard-page.component.html',
  styleUrls: ['./theard-page.component.css']
})
export class TheardPageComponent implements OnInit {

  constructor(private service: SearchServiceService) { }
  selectedIndex = false;
  search = '';
  ngOnInit() {
    this.search = this.service.search;
  }
  osElements = [
    {
      title: 'Намоиш',
      about: 'маҷмӯи слайдҳо, воситаҳои пешниҳодкунӣ, маводи тақсимшаванда, матни лексияҳо ва нақшаи баромад, ' +
        'ки ба мавзӯи муайян бахшида шудаанд ва дар парвандаи махсу',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/20present.png'
    },
    {
      title: 'Слайд',
      about: 'ҷузъи алоҳидаи намоиш мебошад. Ҳар як слайд метавонад иттилооти шакл ва хосиятҳои гуногундоштаро дар бар гирад:' +
        ' сарлавҳа, матн, график, диаграмма, ҷадвал, расм ва дигар объектҳои графикӣ ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/21slayd.png'
    },
    {
      title: 'MS PowerPaint',
      about: 'барномаи машҳури намоишсоз аз MS Office мебошад. Яке аз нармафзори замонавӣ ва мукаммали тайёр намудани намоишҳо,' +
        ' баромадҳо ва слайд-филмҳо ба шумор меравад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/23paint.png'
    },
    {
      title: 'OOImpress',
      about: 'барномаи машҳури намоишсоз аз OpenOffice, ки ҳам дар муҳити СО MS Windows ва ҳам СО Linux якхела кор карда метавонад.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/22impress.png'
    },
    {
      title: 'Desktop.ini',
      about: 'файли махфии дар Microsoft Windows барои нигоҳдории параметрҳои сохтории папка, ки дар он нигоҳ дошта мешавад. ' +
        'агар макет ё созкунӣ барои папкаи интихобшуда тағйир ёбад, файли  desktop.ini ба таври автоматӣ генератсия мешавад, ' +
        'барои сабткунии онҳо',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'FAT ',
      about: 'FAT (ҷадвали ҷойгиркунии файлҳо) –ин намуди системаи файлӣ, ки аз ҷониби ширкати  Microsoft коркард карда шуда, ' +
        'дар системаҳои оператсионии пешина истифода мешуд',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'GFS',
      about: 'GFS - ин системаи файлӣ, ки аз қониби ширкати  Google барои истифодабарии ширкат соли 2000 коркард шудааст. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'HFS ',
      about: 'HFS – (системаи файлии иерархӣ) – ин системаи файлӣ барои нигоҳдории файлҳо дар дискета, ' +
        ' CD-ROM дискҳо ва диски сахти компютерҳои куҳнаи Apple Macintosh истифода мешавад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'INI-файл',
      about: 'INI-файл – ин файли инитсиализатсияи барномаҳои компютерӣ барои нигоҳдории сохтори компютер ё барномаҳои алоҳидаи ' +
        'он мебошад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
  ];


}
