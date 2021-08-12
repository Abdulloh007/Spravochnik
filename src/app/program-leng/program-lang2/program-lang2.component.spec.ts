import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramLang2Component } from './program-lang2.component';

describe('ProgramLang2Component', () => {
  let component: ProgramLang2Component;
  let fixture: ComponentFixture<ProgramLang2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramLang2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramLang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
