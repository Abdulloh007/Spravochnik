import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Code2Component } from './code2.component';

describe('Code2Component', () => {
  let component: Code2Component;
  let fixture: ComponentFixture<Code2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
