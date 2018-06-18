import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoANGULARComponent } from './curso-angular.component';

describe('CursoANGULARComponent', () => {
  let component: CursoANGULARComponent;
  let fixture: ComponentFixture<CursoANGULARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoANGULARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoANGULARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
