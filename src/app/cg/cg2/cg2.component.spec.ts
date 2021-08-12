import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cg2Component } from './cg2.component';

describe('Cg2Component', () => {
  let component: Cg2Component;
  let fixture: ComponentFixture<Cg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
