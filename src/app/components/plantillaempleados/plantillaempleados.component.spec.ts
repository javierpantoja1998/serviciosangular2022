import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaempleadosComponent } from './plantillaempleados.component';

describe('PlantillaempleadosComponent', () => {
  let component: PlantillaempleadosComponent;
  let fixture: ComponentFixture<PlantillaempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaempleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
