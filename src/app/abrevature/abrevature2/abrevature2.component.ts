import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abrevature2',
  templateUrl: './abrevature2.component.html',
  styleUrls: ['./abrevature2.component.css']
})
export class Abrevature2Component implements OnInit {

  abElements = [
    {
    title: 'JPEG',
    about: 'joint photographic experts group',
    title_ru: '',
    about_ru: '',
    image: ''
  },
    {
      title: 'BASIC',
      about: 'Beginner’s All-purpose Symbolic Instruction Code',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'PL/M ',
      about: 'Programming Language for Microcomputers',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'ER',
      about: 'Entity Relationship',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'SQL',
      about: 'Structured Query Language',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'DDL',
      about: 'Data Definition Language',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'DML',
      about: 'Data Manipulation Language',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'TCL',
      about: 'Transaction Control Language',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'UTF8',
      about: 'Unicode Transformation Format',
      title_ru: '',
      about_ru: '',
      image: ''
    },
    {
      title: 'XML',
      about: 'Xtensible Markup Language',
      title_ru: '',
      about_ru: '',
      image: ''
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
