import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadeLayoutComponent } from './funcionalidade-layout.component';

describe('FuncionalidadeLayoutComponent', () => {
  let component: FuncionalidadeLayoutComponent;
  let fixture: ComponentFixture<FuncionalidadeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalidadeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
