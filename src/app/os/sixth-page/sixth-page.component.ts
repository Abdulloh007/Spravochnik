import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../../search-service.service';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.css']
})
export class SixthPageComponent implements OnInit {

  constructor(private service: SearchServiceService) { }
  selectedIndex = false;
  search = '';
  ngOnInit() {
    this.search = this.service.search;
  }
  osElements = [
    {
      title: 'Реҷаи бехатарӣ',
      about: 'реҷаи барномавӣ, ки  ба истифодабарандагони  Windows 95, 98, ME, 2000, XP, Vista, 7, 8 ва 10 имконияти дохилшавӣ' +
        ' ба версияи тағйирёфтаи Windows ва ислоҳи дилхоҳ барнома, ки ба кори версия халал мерасонад, медиҳад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/58.jpg'
    },
    {
      title: 'Буфери ивазкунӣ',
      about: 'ҷойи махсус дар хотираи компютер, ки дар он маълумот муваққатан нигоҳ дошта мешавад, ки бурида ё нусхабардорӣ карда шуда буд.' +
        ' Баъдан ин маълумотҳоро ба ҷойи дигар гузоштан мумкин аст. Буфери ивазкунӣ одатан маълумотро то он даме нигоҳ медорад, ки ' +
        ' маълумоти дигар нусхабардорӣ шавад ё компютер хомӯш кард шавад.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'Виджет',
      about: 'ин хусусияти иловагии таъминоти барномавӣ, ё васеъкунанда барои системаи оператсионӣ ё веб-саҳифа, ки функсияҳо навро ' +
        'илова карда, истифодаи замимаҳо/СО-ро осон мегардонад.  ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/60.jpg'
    },
    {
      title: 'Файли системавӣ',
      about: 'файл, содержащий один из модулей операционной системы или набор данных, которые она использует.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'Ҷадвали FAT',
      about: 'таблица размещения файлов, таблица для размещения динамического пространства жесткого диска, ' +
        'единицей распределяемой памяти которой является кластер.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/images.OS/'
    // },
  ];

}
