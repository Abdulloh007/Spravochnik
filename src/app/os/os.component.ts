import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../search-service.service';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css'],
})
export class OSComponent implements OnInit {
  constructor(private service: SearchServiceService) {}
   selectedIndex = false;
   osElements = [
  {
   title: 'Системаи оператсионии Microsoft Windows ',
   about: 'Системаи оператсиони бисёрвазифавии 32-разряда барои IBM – компютерҳои фардии маҷмӯӣ бо интерфейи графикии дидашавандаи ' +
     'истифодабаранда.',
   title_ru: 'Операционная система Microsoft Windows',
    about_ru: 'Многозадачная 32-разрядная операционная система для IBM - совместимых персональных компьютеров с наглядным графическим ' +
      'интерфейсом пользователя.',
    image: './assets/images.OS/1windows.png'
  },
  {
    title: 'Системаи оператсионӣ',
    about: 'комплекси барномаҳо, ки иҷроиши дигар барномаҳо, тақсимоти захираҳо, банақшагирӣ, воридот ва содироти маълумот, идоракунии ' +
      'маълумот, баҳамтаъсирӣ бо операторро  таъмин менамояд',
    title_ru: 'Операционная система Microsoft Windows',
    about_ru: 'Многозадачная 32-разрядная операционная система для IBM - совместимых персональных компьютеров с наглядным графическим' +
      ' интерфейсом пользователя.',
    image: './assets/images.OS/2operatingsystem.jpg'
  },
  {
    title: 'NotePad',
    about: 'виройишгари хеле одӣ буда, дар  таркиби CO Windows аст',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/3notepad.jpg'
  },
  {
    title: 'McEdit',
    about: 'компоненти менеҷери парвандаи mc (Midnight Commander) аз СО Linux буда, ба мисли виройишгари Edit аз MS DOS аст. ',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/4mcedit.png'
  },
  {
    title: 'KEdit',
    about: 'виройишгари хеле одӣ буда, дар таркиби KDE Linux аст',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/'
  },
  {
    title: 'Kwrite',
    about: 'виройишгари нисбатан пурқуввати KDE Linux аст.',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/6write.png'
  },
  {
    title: 'Emacs',
    about: 'менеҷери парвандаӣ ва виройишгари матнӣ буда, макрофармон (макрос) сохта метавонад. Дар тамоми навъҳои Unix, аз ҷумла  ' +
      'Linux мавҷуд аст. Онро дар MS Windows низ истифода бурдан мумкин аст. ',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/7Emacs-icon.png'
  },
  {
    title: ' MS Word',
    about: 'протсессори матнӣ аз MS Office мебошад',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/8word.jpg'
  },
  {
    title: 'StarWriter',
    about: 'протсессори матнӣ аз StarOffice мебошад. Ба Word монанд буда, ҳам дар муҳити СО Windows ва ҳам СО Linux якхела кор мекунад.',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/9starwriter.png'
  },
  {
    title: 'LyX',
    about: 'протсессори матнӣ (KLyx дар  KDE) буда, фармонҳои TeX ва LaTeX-ро қабул карда метавонад.',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/10lyx.jpg'
  },
  ];
   search = '';
   ngOnInit() {
      this.search = this.service.search;
   }


}
