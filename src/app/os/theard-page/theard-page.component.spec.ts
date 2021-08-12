import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheardPageComponent } from './theard-page.component';

describe('TheardPageComponent', () => {
  let component: TheardPageComponent;
  let fixture: ComponentFixture<TheardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
