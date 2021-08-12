import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cg4Component } from './cg4.component';

describe('Cg4Component', () => {
  let component: Cg4Component;
  let fixture: ComponentFixture<Cg4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cg4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
