import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes , RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { OSComponent } from './os/os.component';
import { CGComponent } from './cg/cg.component';
import { BIComponent } from './bi/bi.component';
import { InformComponent } from './inform/inform.component';
import { CSComponent } from './cs/cs.component';
import { CodeComponent } from './code/code.component';
import { CArchiComponent } from './carchi/carchi.component';
import { ProgramLengComponent } from './program-leng/program-leng.component';
import { InternetComponent } from './internet/internet.component';
import { AbrevatureComponent } from './abrevature/abrevature.component';
import {MainComponent} from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FactsComponent } from './facts/facts.component';
import { ScientistsComponent } from './scientists/scientists.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NetworkComponent} from './network/network.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { SearchFilterPipe } from './search-filter.pipe';
import { SecondPageComponent } from './os/second-page/second-page.component';
import { TheardPageComponent } from './os/theard-page/theard-page.component';
import { FourthPageComponent } from './os/fourth-page/fourth-page.component';
import { FifthPageComponent } from './os/fifth-page/fifth-page.component';
import { SixthPageComponent } from './os/sixth-page/sixth-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Cg2Component } from './cg/cg2/cg2.component';
import { Cg3Component } from './cg/cg3/cg3.component';
import { Cg4Component } from './cg/cg4/cg4.component';
import { Bi2Component } from './bi/bi2/bi2.component';
import { Bi3Component } from './bi/bi3/bi3.component';
import { Bi4Component } from './bi/bi4/bi4.component';
import { Bi5Component } from './bi/bi5/bi5.component';
import { Bi6Component } from './bi/bi6/bi6.component';
import { Bi7Component } from './bi/bi7/bi7.component';
import { Bi8Component } from './bi/bi8/bi8.component';
import { Bi9Component } from './bi/bi9/bi9.component';
import { Inform2Component } from './inform/inform2/inform2.component';
import { Code2Component } from './code/code2/code2.component';
import { Carchi2Component } from './carchi/carchi2/carchi2.component';
import { Carchi3Component } from './carchi/carchi3/carchi3.component';
import { Carchi4Component } from './carchi/carchi4/carchi4.component';
import { Carchi5Component } from './carchi/carchi5/carchi5.component';
import { Carchi6Component } from './carchi/carchi6/carchi6.component';
import { ProgramLang2Component } from './program-leng/program-lang2/program-lang2.component';
import { Network2Component } from './network/network2/network2.component';
import { Network3Component } from './network/network3/network3.component';
import { Network4Component } from './network/network4/network4.component';
import { Network5Component } from './network/network5/network5.component';
import { Network6Component } from './network/network6/network6.component';
import { Network7Component } from './network/network7/network7.component';
import { Network8Component } from './network/network8/network8.component';
import { Abrevature2Component } from './abrevature/abrevature2/abrevature2.component';
import { Abrevature3Component } from './abrevature/abrevature3/abrevature3.component';
import { Abrevature4Component } from './abrevature/abrevature4/abrevature4.component';
import { Abrevature5Component } from './abrevature/abrevature5/abrevature5.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'OS', component: OSComponent},
  {path: 'Computer_Graphic', component: CGComponent},
  {path: 'Information`s_Base', component: BIComponent},
  {path: 'Inform', component: InformComponent},
  {path: 'Computer`s_Security', component: CSComponent},
  {path: 'Code', component: CodeComponent},
  {path: 'Computer`s_Architecture', component: CArchiComponent},
  {path: 'Program`s_Lang', component: ProgramLengComponent},
  {path: 'Internet', component: InternetComponent},
  {path: 'Armature', component: AbrevatureComponent},
  {path: 'About_us', component: AboutComponent},
  {path: 'Contact_us', component: ContactComponent},
  {path: 'Facts', component: FactsComponent},
  {path: 'Scientists', component: ScientistsComponent},
  {path: 'Network', component: NetworkComponent},
  {path: 'os2', component: SecondPageComponent},
  {path: 'os/3', component: TheardPageComponent},
  {path: 'os/4', component: FourthPageComponent},
  {path: 'os/5', component: FifthPageComponent},
  {path: 'os/6', component: SixthPageComponent},
  {path: '**', component: NotFoundComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    OSComponent,
    CGComponent,
    BIComponent,
    InformComponent,
    CSComponent,
    CodeComponent,
    CArchiComponent,
    ProgramLengComponent,
    InternetComponent,
    AbrevatureComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    FactsComponent,
    ScientistsComponent,
    NetworkComponent,
    SearchFilterPipe,
    SecondPageComponent,
    TheardPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    NotFoundComponent,
    Cg2Component,
    Cg3Component,
    Cg4Component,
    Bi2Component,
    Bi3Component,
    Bi4Component,
    Bi5Component,
    Bi6Component,
    Bi7Component,
    Bi8Component,
    Bi9Component,
    Inform2Component,
    Code2Component,
    Carchi2Component,
    Carchi3Component,
    Carchi4Component,
    Carchi5Component,
    Carchi6Component,
    ProgramLang2Component,
    Network2Component,
    Network3Component,
    Network4Component,
    Network5Component,
    Network6Component,
    Network7Component,
    Network8Component,
    Abrevature2Component,
    Abrevature3Component,
    Abrevature4Component,
    Abrevature5Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
