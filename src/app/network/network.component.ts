import {Component} from '@angular/core';


@Component({
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})

export class NetworkComponent {
  selectedIndex = false;
  networkElements = [
    {
      title: 'Шабака',
      about: 'Агар ду ва зиёда компютер бо ҳамдигар бо ягон усуле пайваст (симӣ,мавҷӣ ва ғайра) шуда,' +
        ' байни ҳамдигар иртибот барқарор карда тавонад, он гоҳ мегӯянд, ки онҳо дар шабакаи компютерӣ қарор доранд. ' +
        'Шабакаи копютерӣ воситаи пуриқтидори мубодилаи иттилоотии байни компютерҳо мебошад. ',
      title_ru: 'Сеть',
      about_ru: 'Это сеть',
      image: './assets/networkImages/1seti.jpeg',
    },
    {
      title: 'Намудҳои шабакаи компютерӣ',
      about: 'Вобаста аз ҳаҷми иттилооти дар ҳалли масъалаҳо истифодашаванда, ' +
        'аз шабакаҳои компютерии маҳаллӣ (локалӣ), минтақавӣ(регионалӣ),' +
        ' иттиҳодиявӣ (корпоративӣ) ва саросарӣ (глобалӣ) истифода мебаранд.',
      title_ru: 'ww',
      about_ru: 'gggg',
      image: './assets/networkImages/2.jpg',
    },
    {
      title: 'Шабакаҳои маҳаллӣ',
      about: 'Шабакаҳои маҳҳаллӣ одатан барои ташкил намудани робитаи байни компютерҳои як бино ё корхона созмон дода мешаванд. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/3.jpg',
    },
    {
      title: 'Шабакаҳои минтақавӣ',
      about: 'Агар компютерҳои якчанд корхонаҳои маҳал бо ҳамдигар робита барқарор намоянд, он гоҳ мегӯянд,' +
        ' ки онҳо дар шабакаи минтақавӣ пайвастанд. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/4.jpg',
    },
    {
      title: 'Технлогияҳои шабакавӣ',
      about: 'Маҷмӯи протоколҳои ба мувофиқа овардаи стандартӣ, методҳои татбиқи воситаҳои барномавию техникӣ дар шабакасозиҳои компютерӣ' +
        ' ва тарзҳои хизматрасонӣ ба корбарони шабака мебошад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/7.jpg',
    },
    {
      title: 'Адаптерҳои шабакавӣ',
      about: 'воситаҳои техникие, ки онҳо компютерро бо хатҳои робитавӣ пайванд месозанд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/8.png',
    },
    {
      title: 'Модулятсия',
      about: 'раванди табдилдиҳии иттилооти рақамӣ ба иттилооти аналогиро меноманд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/9.png',
    },
    {
      title: 'Демодулятсия',
      about: 'раванди табдилдиҳии иттилооти аналогӣ  ба иттилооти рақамиро меноманд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/10.png',
    },
    {
      title: 'Протокол',
      about: 'қоидаи ягонаи мубодилаи иттилоотро дар шабакаи компютериро меноманд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/7.jpg',
    },
    {
      title: 'Протокол РОР ',
      about: 'протокол почтового офиса, почтовый протокол — протокол сети Интернет, ' +
        'позволяющий осуществлять динамический доступ в почтовый ящик сервера с рабочей станции.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/8.png',
    },
    {
      title: 'Протокол SMTP',
      about: 'протокол сети Интернет, позволяющий осуществлять отправку почты с рабочей станции на сервер.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/9.png',
    },
    {
      title: 'Интернет',
      about: 'маҷмӯи шабакаҳои давлатӣ, минтақавӣ, иттиҳодиявӣ, дигар навъи шабакаҳои компютерӣ ва инчунин компютерҳои алоҳидае мебошад,' +
        ' ки байни ҳамдигар бо ёрии таъминоти барномавии гуногуни иттилоотӣ-иртиботии ба шакли ягона овардашуда пайваст гардидаанд.' +
        ' Асоси Интернетро се мафҳуми калидӣ ташкил медиҳанд: комптери марказӣ, хати интиқоли иттилоот ва протоколҳои TSP/IP.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/10.png',
    },
    {
      title: 'Протоколи TCP/IP',
      about: 'Transmission Control Protocol/Internet Protocol - протоколи стандартии равобити шабакавӣ мебошад,' +
        ' ки барои пайвастани системаҳои компютерӣ бо Интернет пешбинӣ шуда,' +
        ' мубодилаи устувори иттилоотро дар саросари шабакаи ҷаҳон таъмин менамояд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/11.jpg',
    },
    {
      title: 'WWW',
      about: 'World Wide Web - тори анкабути ҷаҳонӣ мебошад. WWW муҳити абарматниест,' +
        ' ки он миқдори бениҳоят зиёди санадҳои гуногунро дар бар гирифтааст. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/12.jpg',
    },
    {
      title: 'Почтаи электронӣ',
      about: 'низоми мубодилаи мукотиботро байни корбарони шабакаи телекоммуникатсионӣ меноманд.e-mail яке аз шаклҳои хизматрасонии ' +
        'шабакаи Интернет мебошад. Почтаи электронӣ имконият медиҳад, ки дар байни садҳо миллион корбарони дигари шабакаҳои компютерӣ ' +
        'истифодабарандаи мушаххаси ин хизматрасониро бехато муайян карда, мактуб, пайғом ё иттилоотро бе монеа ба гирандаи зарурӣ ирсол ' +
        'кунад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Сервери парвандаӣ',
      about: 'Яке аз шаклҳои хизматрасонӣ дар шабака ба ҳисоб рафта, дар мубодилаи парвандаҳо он протоколи' +
        ' FTP (File Transfer Protocol - протоколи интиқоли парвандаҳо)-ро амалӣ месозад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/13.png',
    },
    {
      title: 'Вебсанад',
      about: 'Парвандае, ки бо ёрии ягон барномаи татбиции мушаххас сохта шуда, ягон навъи иттилоотро дар бар мегирад,' +
        ' дарунмояи он вебсанад номида мешавад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/14.jpg',
    },
    {
      title: 'Вебсаҳифаҳо',
      about: 'Саҳифаҳои алоҳидаи интернетиро вебсаҳифа меноманд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/14.png',
    },
    {
      title: 'Торнигори анкабути ҷаҳонӣ',
      about: 'Низоми дастрасӣ ба иттилоот дар Интернет буда, дар заминаи санадҳои абарматнӣ пайдо шудааст.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/14.png',
    },
    {
      title: 'Суроғаи универсиалии захира',
      about: 'URL(Universal Uniform Resourse Locator) тарзи стандартии ҷоймуайянкуниро барои додаҳои дар шабакаи саросарии компютерии ' +
        'Интернет дастрасбуда таъмин менамояд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/17.jpg',
    },
    {
      title: 'Протоколи интиқоли абарматнҳо',
      about: 'HTPP (Hyper Text Transfer Protocol) қоидаҳои дастрасӣ ба иттилоот ва интиқоли абарматнҳоро дар шабака ҷорӣ месозад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/18.jpg',
    },
    {
      title: 'Забони нишонагузории абарматнҳо',
      about: 'HTML (Hyper Text  Markup Language) имконияти сохтани чунон санадҳои матниро фароҳам меорад,' +
        ' ки дар онҳо пайвандсозӣ ба дигар додаҳои матн тавассути протоколи URL амалӣ гардонида мешавад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/18.jpg',
    },
    {
      title: 'Провайдер',
      about: 'Муассисаест, ки хизматрасонии Интернетро дар маҳалҳо таъмин менамояд. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/17.jpg',
    },
    {
      title: 'Номҳои доменӣ',
      about: 'Номҳои домении компютерҳо аз рӯйи маҳалли ҷуғрофӣ ва соҳаи мавзӯияшон ҷудо карда мешаванд. ' +
        'Номи домен аз рост ба чап хонда мешавад. Масалан, www.polytech.tj, ки аввал домени дараҷаи олӣ - tj, баъд домени дараҷаи ' +
        'дуюм - polytech хонда мешавад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/2.jpg',
    },
    {
      title: 'FTP Протоколи интиқоли парвандаҳо',
      about: 'FTP File Transfer Protocol - тарзи маъмули дастрасӣ ба додаҳои Интернетӣ мебошад ' +
        'ва бештар барои бо шабакаи Интернет интиқол додани иттилооти ҳачман калон истифода бурда мешавад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/2.jpg',
    },
    {
      title: 'Браузер',
      about: 'Дарёфти вебсаҳифаҳо аз Интернет ва намоиши онҳо дар экрани компютер ва барои ин истифодаи барномаҳои' +
        ' махсуси тамошои абарматнҳо браузер номида мешавад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/3.jpg',
    },
    {
      title: 'AltaVista ',
      about: 'яке аз аввалин мошинҳои пуриқтидори ҷустуҷӯйии иттилоот дар шабака мебошад.' +
        ' Дар таркиби он барнома-тарҷумоне насб карда шудааст, ки имконияти аз забони англисӣ ба забонҳои фаронсавӣ, олмонӣ,' +
        ' итолиявӣ ва испанӣ тарҷума кардан ва баръакс ба забони англисӣ баргардонданро дорад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/3.jpg',
    },
    {
      title: 'Yahoo!',
      about: 'Мошини ҷустуҷӯйӣ ва таснифгари пуриқтидори захираҳои иттилоотӣ дар шабака мебошад. Таснифи иттилоот аз' +
        ' рӯйи иртиботи он ба соҳаи муайян - фарҳанг, санъат, бизнес, компютер, маориф ва ғайра гузаронида мешавад, ки ин пайдарпайӣ ' +
        'қисмҳои сатҳи болоӣ ном гирифтаанд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/4.jpg',
    },
    {
      title: 'Rambler',
      about: 'Сервери ҷустуҷӯӣ бо забони русӣ мебошад. Дар бароибари системаи пуриқтидори ҷустуҷӯӣ будан боз ҷувздони таснифотии ' +
        '"Rambler Top 100" мебошад, ки дар он ҳамаи мавзуҳои асосии соҳавии Web-серверҳои русӣ тибқи категория гирд оварда шудааст. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/4.jpg',
    },
    {
      title: 'Яndex',
      about: 'Яndex низ ба монанди Rambler сервери ҷустуҷӯӣ бо забони русӣ буда, фаъолона ва босуръат пеш рафта истодааст.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/7.jpg',
    },
    {
      title: 'Google',
      about: 'Аз ҳама маъмултарин ва маҳбубтарин системаи ҷустуҷӯӣ байни истифодабарандагон мебошад, ' +
        'ки теъдоди муштариёни ҳармоҳаи он зиёда аз 20 миллион нафарро ташкил медиҳад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/7.jpg',
    },
    {
      title: 'Онлайн-муошират',
      about: 'низоми муоширати онлайнӣ як навъ робитаи шабакавӣ буда,ба корбарон имконият медиҳад, ки байни худ ' +
        'дар реҷаи вақти воқеӣ мубодилаи иттилоот намоянд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Сомона',
      about: 'таҳти як ном ва суроғаи ягона дар шабакаи саросарии компютерии Интернет муттаҳид' +
        ' сохтани миқдори муайяни вебсаҳифаҳои сарлавҳадори алоҳидаро меноманд. Намудҳои сомона: хусусӣ, иттиҳодиявӣ, ' +
        'захираҳои иттилоотӣ, хидматӣ.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/7.jpg',
    },
    {
      title: 'IP - адрес',
      about: 'суроғаи уникалии ҳар компютер дар Интернет мебошад, ки бо қоидаҳои муайян сохта шуда,' +
        ' (дар худ рақами узел ва шабакаро дорад) ҳамчун пайдарпайии ададҳо ва символҳо дода мешавад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/1seti.jpeg',
    },
    {
      title: 'Интернет',
      about: 'шабакаи глобалии компютерии додугирифти маълумот,  ки шабакаҳои бисёри минтақавӣ ва локаии тамоми кураи Заминро' +
        ' дар бар мегирад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/12.jpg',
    },
    {
      title: 'Почтаи электронӣ',
      about: 'низоми ивази ахборот, ки байни истифодабарандагони ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Сервер',
      about: 'компютери пурқудрат буда, онро асосан дар марказҳои шабакаҳои компютерӣ истифода мебаранд. Вазифаи сервер аз' +
        ' хизматрасонии клмпютерҳои алоҳидаи ба он пайванд ва шабакаҳои компютерӣ иборат аст. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/9.png',
    },
    {
      title: 'Топология',
      about: 'усули физикӣ пайваст намудани компютерҳо дар шабакаи локалӣ мебошад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/14.jpg',
    },
    {
      title: 'Топологияи шабакавӣ ',
      about: 'тарзи шарҳ додани конфигуратсияҳои шабакавӣ, схемаи ҷойгиршавӣ ва пайвастшавии таҷҳизотҳои шабакавӣ мебошад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/17.jpg',
    },
    {
      title: 'Топологияи шабакаҳои компютерӣ',
      about: 'ин конфигуратсияи физикии алоқаи компютерҳо ё дигар таҷҳизотҳои шабакавӣ байни ҳамдигар аст.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Хати алоқа ',
      about: 'ин фосилаи аппаратӣ ва муҳити физикӣ, ки бо он сигналҳои иттилоотӣ дода мешавад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/18.jpg',
    },
    {
      title: 'Кабели коаксиалӣ',
      about: 'кабели электрикие мебошад, ки аз ноқили марказӣ ва экрани ҳамҷоя иборат аст. ' +
        'Одатан барои додани сигналҳои суръати баланддошта истифода карда мешавад',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Кабели оптикӣ ',
      about: 'ин симе, ки аз як ё якчанд шишанахи бо пластмасса пӯшидашуда иборат аст. Кабели оптикӣ барои додани сигналҳо ' +
        'ба воситаи нурҳои оптикӣ пешбинӣ шудааст.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Коннектор',
      about: 'барои пайвасткунии проводник ва таҷҳизотҳо (компютер) истифода мешавад. Коннекторро пайвасткунандаи электрикӣ' +
        ' низ гуфтан мумкин аст',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/11.jpg',
    },
    {
      title: 'Пакет',
      about: 'воҳиди асосии маълумот дар шабакаи компютерӣ мебошад. Дар шабакаи компютерӣ пакет — ин блоки маълумоти муайяни ҷудошуда,' +
        ' ки бо режими пакети дар шабака дода мешавад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/17.jpg',
    },
    {
      title: 'Клиент-сервер',
      about: '(Client-server) — архитектураи ҳисоббарор ё шабакавӣ мебошад, ки вазифаҳо ё нагрузкаи шабакавиро байни таҳвилгарони ' +
        'хизматрасонӣ тақсим карда, сервер, клиент, фармоишгар номида мешаванд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Сиёсати гурӯҳӣ ',
      about: 'ин инфраструктурае, мебошад ки барои истифодабарандагони муайян ё гурӯҳи истифодабарандагон, компютерҳо конфигуратсия ' +
        'ва маҳдудиятҳоро пешкаш мекунад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Администратори шабакавӣ ',
      about: 'коргаре, ки таъмини кори техникии компютер, шабака ва барномаҳоро ба ӯҳда дорад. Ба вазифаи администраторони шабака' +
        ' сохтани коршоямии оптималии компютер ва таъминоти барномавӣ дохил мешавад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/12.jpg',
    },
    {
      title: 'Администриронӣ',
      about: 'маҷмӯи қоидаҳо, талаботҳо ва пешниҳодҳо барои идентификатсия ва нишонгузории элементҳои пассив мебошад,' +
        ' ки ҳуҷҷатҳо ва иттилоотҳои сохтори системаи кабелиро шарҳ медиҳад ва онҳоро иҷро мекунад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/12.jpg',
    },
    {
      title: 'Протоколи LDAP  ',
      about: 'аз калимаи англисии Lightweight Directory Access Protocol гирифта шуда, маънояш протоколи соддакардашуда,' +
        ' барои дастрасӣ ба каталогҳо мебошад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/13.png',
    },
    {
      title: 'DHCP',
      about: 'Dynamic Host Configuration Protocol – барои ба ҳар як клиенти шабака ба таври автоматӣ тақсим намудани IP – адресҳо истифода' +
        ' бурда мешавад',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/14.jpg',
    },
    {
      title: 'DNS ',
      about: 'Domain Name System – ин системаест, ки номи символии доменҳоро ба IP – адрес ва баръакс IP – адресро ба' +
        ' домени символи тағйир медиҳад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/14.jpg',
    },
    {
      title: 'Кадр',
      about: '(жарг. фрейм, frame — кадр) — фрагменти охири маълумот,' +
        ' ки байни таҷҳизотҳои шабакавӣ бо протоколи сатҳи каналии модели OSI дода мешавад',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/14.jpg',
    },
    {
      title: 'Модели шабакавӣ',
      about: 'ин шарҳи назариявии принсипҳои кории протоколҳои шабакавӣ, ки байни ҳамдигар ҳамкорӣ мекунанд.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/13.png',
    },
    {
      title: 'Модели SPX/IPX',
      about: 'додугирифти шабакавии пакетҳо ё пайдарпай ивазкунии пакетҳо дар шабака мебошад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/9.png',
    },
    {
      title: 'Модели AppleTalk',
      about: 'модел барои шабакаи AppleTalk мебошад.',
      image: './assets/networkImages/9.png',
    },
    {
      title: 'Модели Fibre Channel',
      about: 'модел барои шабакаҳои баландсуръати Fibre Channel мебошад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/10.png',
    },
    {
      title: 'Модели OSI',
      about: 'модели абстрактии шабакавӣ барои коммуникатсия ва коркарди протоколҳои шабакавӣ мебошад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/10.png',
    },
    {
      title: 'Коммутатор',
      about: 'таҷҳизот барои ҳамҷоякунии якчанд гиреҳҳои шабакаи компютерӣ буда, дар доираи як ё якчанд сегментҳои шабака хизмат мекунад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/11.jpg',
    },
    {
      title: 'Медиоконвертер',
      about: 'ин таҷҳизоти шабакавӣ, ки як муҳити шабакавиро ба муҳити дигар тағйир медиҳад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/11.jpg',
    },
    {
      title: 'Узел',
      about: 'компютер дар шабака, ки функсияҳои асосии шабакавиро иҷро мекунад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/12.jpg',
    },
    {
      title: 'Хост',
      about: 'мошини кории шабака, компютери асосӣ. Компютери шабакавӣ, ки ба ғайр аз функсияҳои асосии шабакавӣ масъалаҳои истифодабарандагонро иҷро мекунад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/12.jpg',
    },
    {
      title: 'Шлюз',
      about: 'стансияи алоқа бо шабакаҳои беруна мебошад.',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/15.jpg',
    },
    {
      title: 'Маскаи зершабака',
      about: 'ин маскаи битие, ки дар ҳолати ҳамҷоякунии битӣ ба IP-суроғаҳои шабака муайян мекунад. ',
      title_ru: '',
      about_ru: '',
      image: './assets/networkImages/17.jpg',
    },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
    // {
    //   title: '',
    //   about: '',
    //   image: './assets/networkImages/',
    // },
  ];
}