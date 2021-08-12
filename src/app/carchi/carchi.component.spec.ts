import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CArchiComponent } from './carchi.component';

describe('CArchiComponent', () => {
  let component: CArchiComponent;
  let fixture: ComponentFixture<CArchiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CArchiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CArchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
