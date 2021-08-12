import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from './search-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
providers: [SearchServiceService]
})
export class AppComponent implements OnInit{
isCollapse = true;
search = '';
Close() {
  this.isCollapse = !this.isCollapse;
}
constructor(private service: SearchServiceService) {}
ngOnInit() {
this.search = this.service.search;
}
}
