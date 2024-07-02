import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteligenciaComponent } from './inteligencia.component';

describe('InteligenciaComponent', () => {
  let component: InteligenciaComponent;
  let fixture: ComponentFixture<InteligenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteligenciaComponent]
    });
    fixture = TestBed.createComponent(InteligenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
