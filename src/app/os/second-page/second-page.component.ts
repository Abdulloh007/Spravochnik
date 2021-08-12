import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../search-service.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private service: SearchServiceService) { }
  selectedIndex = false;
  osElements = [
    {
    title: 'Netscape Composer ',
    about: 'протсессори матнӣ буда, фармонҳои HTML-ро қабул карда метавонад. Намунаҳояш ҳам барои СО Windows ва ҳам СО Linux мавҷуданд. ',
    title_ru: '',
    about_ru: '',
    image: './assets/images.OS/11composer.gif'
  },
    {
      title: 'WordPad',
      about: 'виройишгари матнӣ буда, барои сохтан ва таҳрир кардани санадҳо пешбинӣ шудааст.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/12wordart.png'
    },
    {
      title: 'Колонтитул',
      about: 'Маълумоте, ки дар ҳошияи болоии (поёнии) саҳифаи санад ҷой дода мешавад, сарсаҳфа (посаҳфа) меноманд.сарсаҳфа' +
        ' ва посаҳфаро дар ҳамҷоягӣ колонтитул меноманд.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/13kolontitul.png'
    },
    {
      title: 'Ҷадвал',
      about: 'тӯри аз сатру сутунҳо иборатбудаеро меноманд, ки дар буриши онҳо катакҳо ҳосил мешаванд',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/14tablitsa.png'
    },
    {
      title: 'OLE',
      about: '(Object Linking and Embedding ) – объектҳои OLE васоити васеъгардонии имкониятҳои Word ба шумор рафта,' +
        ' барномаҳои дигари дар муҳити Windows коркунандаро ҳамчун қисми таркибӣ ба он тобеъ мегардонад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/15OLE.jpg'
    },
    {
      title: 'Абарматн',
      about: 'Матни ба таври махсус сохташудаеро меноманд, ки тавассути пайвандҳои он ба матни санадҳои дигар гузаштан мумкин аст.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/16open.jpg'
    },
    {
      title: 'OpenOffice.org ',
      about: ' яке аз бастаҳои барномавии офисии пуриқтидори замони муосир мебошад. Он имконият медиҳад, ки санадҳои мураккаби ' +
        'расму графикдор дар формати маъмули pdf сохта шаванд ва дар формати маъмули Macromedia Flash (swf) намоиш дода шавад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/17stil.jpg'
    },
    {
      title: 'Сабк',
      about: 'тасвири ороиши қисми мантиқии муайяни санад мебошад.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'Қолаб',
      about: 'парвандае, ки дорои ҷузъҳои форматбандии санад буда, вале худи матнро дар бар намегирад, қолаб ном дорад',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/'
    },
    {
      title: 'Роҳнамо',
      about: 'мундариҷаи интерактивии санад буда. Дар он бо тарзи зинавӣ ҳамаи ҷузъҳои дар санад истифодашаванда нишон дода мешаванд.',
      title_ru: '',
      about_ru: '',
      image: './assets/images.OS/19navigator.png'
    },
  ];
  search = '';
  ngOnInit() {
    this.search = this.service.search;
  }


}
