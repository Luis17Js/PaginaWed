import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NubeComponent } from './nube.component';

describe('NubeComponent', () => {
  let component: NubeComponent;
  let fixture: ComponentFixture<NubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NubeComponent]
    });
    fixture = TestBed.createComponent(NubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
