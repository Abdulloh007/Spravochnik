import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cg',
  templateUrl: './cg.component.html',
  styleUrls: ['./cg.component.css']
})
export class CGComponent implements OnInit {
  selectedIndex = false;
  cgElements = [
    {
      title: 'Рамзбандии монохромӣ',
      about: 'рамзбандиирангиеро, ки дар он барои тасвири як нуқта танҳо як бит иттилоот истифода бурда мешавад',
      image: './assets/'
    },
    {
      title: 'Амиқии ранг',
      about: 'миқдори иттилоотеро, ки барои рамзбандии ранги нуқтаи тасвир истифода бурда мешавад.',
      image: './assets/'
    },
    {
      title: 'Модели рангӣ',
      about: 'тарзи тақсим намудани рангҳоро бо компонентҳои асосӣ мебошад.',
      image: './assets/'
    },
    {
      title: 'Модели рангии RGB',
      about: 'дар ин модел ранги дилхоҳ бо ёрии комбинатсия тобишҳо ва ҷилои се ранги асосӣ сурх (red), сабз (green) ва кабуд (blue) сохта мешавад.',
      image: './assets/'
    },
    {
      title: 'Модели рангии CMYK',
      about: 'Рангҳои таркибии модели  CMYK осмонӣ (cyan), гулобӣ (magenta), зард( yellow) ва сиёҳ(black) мебошанд. Ҳангоми рангсозиҳои типографӣ истифода мешавад.',
      image: './assets/'
    },
    {
      title: 'Модели рангии HSB',
      about: 'ин модел дорои се компоненти асосӣ мебошад: тобиш (hue-тон), пуррагӣ(saturation) дурахши ранг (brightness of the colour)',
      image: './assets/'
    },
    {
      title: 'Виройишгари графикӣ',
      about: 'муҳити амалие мебошад, ки барои таҳия ва таҳрири тасвирҳои графикӣ пешбинӣ шудааст.',
      image: './assets/'
    },
    {
      title: 'Графики растрӣ',
      about: '(raster-панҷара) тасвир бо ёрии маҷмӯи нуҷтаҳои ранга сохта мешавад. Тасвири компютери графикии растрӣ дар шакли матритсаи росткунҷа ифода карда мешавад.',
      image: './assets/'
    },
    {
      title: 'Формати GIF',
      about: '(graphics interchange format-формати мубодилаи графикӣ) - яке аз форматҳои маъмули графикӣ ба ҳисоб рафта, аз сахтафзори компютерӣ вобастагӣ надорад. Формати мазкур барои дар шакли фишурда (зич) нигоҳ доштани тасвирҳои растрӣ пешбинӣ шудааст.',
      image: './assets/'
    },
    {
      title: 'Формати JPEG',
      about: '(joint photographic experts group - гуруҳи муштараки экспертони акс) формати машҳури графикӣ ба ҳисоб рафта, ҳамчун усули самараноки нигаҳдории тобишҳои баланди рангии тасвир истифода бурда мешавад. Дар ин формат барои ифода намудани тасвирҳо зиёда аз 16 миллион рангро истифода бурдан мумкин аст.',
      image: './assets/'
    },
    {
      title: 'Графики векторӣ',
      about: 'Ҷузъҳои асосии графики векторӣ объектҳои геометрӣ мебошанд. Ба сифати объект шаклҳои одии геометрӣ - примитивҳо (доира, росткунҷа, хат, нуқта), фигураҳои таркибии бо ёрии ин примитивҳо сохташуда ва ғайра қабул карда шудаанд. ',
      image: './assets/'
    },
    {
      title: 'Силайн',
      about: 'яке аз объектҳои муҳими графики векторӣ мебошад. Хати каҷест, ки бо ёрии он дигар фигураҳои геометрӣ сохта мешавад.',
      image: './assets/'
    },
    {
      title: 'Paint',
      about: 'яке аз виройишгарони графикии одитарини муҳисти системаи оператсионии MS Windows ба шумор меравад.',
      image: './assets/'
    },
    {
      title: 'ХPaint',
      about: 'яке аз виройишгарони графикии одитарини муҳисти системаи оператсионии MS Linux ба шумор меравад. Барои сохтан ва виройиши расму графикҳои растрӣ пешбинӣ шудааст.',
      image: './assets/'
    },
    {
      title: 'OOPraw',
      about: 'виройишгари графикии вектории OpenOffice Draw  барномаи баста OpenOffice буда, ҳамчун афзори мукаммали тасвирсозӣ дар байни истифодабарандагони компютер машҳур аст. Ин барнома дорои як қатор хизматрасониҳоест, ки бо ёрии онҳо тамоми намудҳои тасвирҳоро - аз диаграммаҳои одӣ ё блок-схемаҳо сар карда, то мусаввараҳои бадеии сечанака ва расмҳои мураккаби техникӣ сохтан мумкин аст. ',
      image: './assets/'
    },
    {
      title: 'Примитивҳои графикӣ',
      about: 'объектҳои минималии графикиро меноманд, ки бо ёрии онҳо расмҳои векторӣ сохта мешаванд.',
      image: './assets/'
    },
    {
      title: 'Сабки графикӣ',
      about: 'аз маҷмӯи фарогирандаи қимати махсусиятҳои (атрибутҳои) графикии мухталиф иборат аст. Ҳангоми ба ягон объект татбиқ намудани сабк, қимати хусусиятҳои ин объект мувофиқи нишондодҳои сабки мазкур аз нав муайян карда мешавад. ',
      image: './assets/'
    },
    {
      title: 'Adobe Photoshop',
      about: 'таҳриргари графикӣ барои коркарди тасвирҳои растрӣ буда, дар байни барномаҳои графики растрӣ мавҷеи марказиро ишғол мекунад. Вазифаи аввалиндараҷаи Adobe Photoshop ин сохтан ва коркарди тасиврҳо мебошад. ',
      image: './assets/'
    },
    {
      title: 'Контент',
      about: 'это абсолютно любое информационно значимое, содержательное наполнение информационного ресурса или веб-сайта. Контентом называются тексты, мультимедиа, графика.',
      image: './assets/'
    },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/'
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/'
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/'
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
