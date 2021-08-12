import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bi4Component } from './bi4.component';

describe('Bi4Component', () => {
  let component: Bi4Component;
  let fixture: ComponentFixture<Bi4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bi4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
