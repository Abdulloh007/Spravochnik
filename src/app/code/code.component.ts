import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  selectedIndex = false;
  codeElements = [
    {
      title: 'Архиватор',
      about: 'барномае, ки мундариҷаи файлро аз ҳисоби сохтани код бо избиточности минималӣ ба таври компактӣ мегардонад. ',
      title_ru: 'Архиватор',
      about_ru: 'программа, что превращает содержание файла в более компактную форму за счет построения кода с минимальной избыточностью.',
      image: '',
    },
    {
      title: 'Архиватсия',
      about: 'зичкунии маълумот, яъне раванд ва методи кодиронии маълумоти архиватсияшуда барои интиқол дар ҳолате, ки барои нигоҳдорӣ ҷойи кам талаб мешавад. ',
      title_ru: 'Архивация',
      about_ru: 'сжатие данных, т.е. процесс и метод кодирования архивируемой информации для перевода в состояние, требующее меньшего пространства для хранения.  ',
      image: '',
    },
    {
      title: 'Системаи ҳисоббарор',
      about: 'маҷмӯи барномаҳо ва воситаҳои техникӣ, ки барои коркарди маълумот пешбинӣ шудааст. ',
      title_ru: 'Вычислительная система',
      about_ru: 'совокупность программ и технических средств, предназначенных для обработки информации.',
      image: '',
    },
    {
      title: 'Абзатс',
      about: 'Ҳар гуна сатре, ки пас аз дохилкунии он тугмаи Enter пахш карда мешавад.',
      title_ru: 'Абзац',
      about_ru: '',
      image: '',
    },
    {
      title: 'Фосилаи абзатс',
      about: 'Ҷои холие, ки пеш аз сар шудани матни сатр партофта мешавад.',
      title_ru: '',
      about_ru: '',
      image: '',
    },
    {
      title: 'Ҳуруф',
      about: 'Ин тарзи навишти ҳарфҳои алифбои забонҳои гуногун мебошад.',
      title_ru: 'Шрифт',
      about_ru: '',
      image: '',
    },
    {
      title: 'Гарнитури ҳуруфҳо',
      about: 'Маҷмӯи намудҳои зоҳиршавии ҳуруфҳоро меноманд.',
      title_ru: 'Гарнитура шрифта',
      about_ru: '',
      image: '',
    },
    {
      title: 'Қолиббандӣ ё форматкунонии матн',
      about: 'Тағйирдиҳии намуди зоҳирии матнро меноманд.',
      title_ru: 'Форматирование текста',
      about_ru: '',
      image: '',
    },
    {
      title: 'Зерменюи банди ҷории меню',
      about: 'Дар мавриди интихоб намудани ин ё он банди меню дар экран ба таври иловагӣ рӯйхати командаҳои банди интихобгардида пайдо мегардад.',
      title_ru: '',
      about_ru: '',
      image: '',
    },
    {
      title: 'Танзимкунии Word',
      about: 'Фаъол гардонидани баъзе имкониятҳои он ва қатъ гардонидани фаъолиятҳои имкониятҳои дигари онро меноманд.',
      title_ru: '',
      about_ru: '',
      image: '',
    },
    {
      title: 'Фрагмент',
      about: 'Ягон қисми матни ҳуҷҷат аст.',
      title_ru: 'Фрагмент',
      about_ru: '',
      image: '',
    },
    {
      title: 'Хати ҷудокунӣ',
      about: 'Фосилаест, ки дар ҳошияи тарафи чапи майдони кории ҳуҷҷат ҷойгир аст.',
      title_ru: '',
      about_ru: '',
      image: '',
    },
    {
      title: 'Буфери мубодила',
      about: 'Ин қисми махсуси хотираи фаврии компютер мебошад, ки дар он информатсия муваққатан нигоҳ дошта мешавад.',
      title_ru: 'Буфер обмена',
      about_ru: '',
      image: '',
    },
    {
      title: 'Объектҳои OLE',
      about: 'Воситаеанд, ки имкониятҳои программаи MS Word-ро беандоза васеъ гардонида, программаҳои дигари дар муҳити Windows коркунандаро ҳамчун қисми таркибии Word ба он тобеъ мегардонанд.',
      title_ru: 'OLE Объекты',
      about_ru: '',
      image: '',
    },
    {
      title: 'WordArt',
      about: 'Программаи махсусе мебошад, ки бо ёрии он матни начандон калон дар шаклҳои гуногуни бадеӣ навишта ва тасвир карда мешаванд.',
      title_ru: 'WordArt',
      about_ru: '',
      image: '',
    },
    {
      title: 'Ҷадвал',
      about: 'Тӯри аз сатру сутунҳо иборатбударо меноманд, ки дар буриши онҳо ячейкаҳо (катакҳо) ҳосил шудаанд.',
      title_ru: 'Таблица',
      about_ru: '',
      image: '',
    },
    {
      title: 'Ҷадвали электронӣ',
      about: 'Синфи программаҳое, ки барои коркарди ҷадвалҳо пешбинӣ карда шудаанд.',
      title_ru: 'Электронная таблица',
      about_ru: '',
      image: '',
    },
    {
      title: 'Ячейкаи ҷорӣ ё фаъол',
      about: 'Ячейкае, ки дар айни ҳол курсори ҷадвалӣ дар атрофи он аст.',
      title_ru: '',
      about_ru: '',
      image: '',
    },
    {
      title: 'Функсияи стандартӣ',
      about: 'Функсияе, ки он қисми таркибии программаи Excel ба ҳисоб рафта, тарзи истифодабарии он дар ҳамаи мавридҳо якхела аст.',
      title_ru: 'Стандартная функция',
      about_ru: '',
      image: '',
    },
    {
      title: 'Диаграмма',
      about: 'Намуди дилхоҳи тасвири графикии маълумотҳои ададӣ дар Excel аст.',
      title_ru: 'Диаграмма',
      about_ru: '',
      image: '',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
