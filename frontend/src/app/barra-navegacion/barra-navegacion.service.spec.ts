import { TestBed } from '@angular/core/testing';

import { BarraNavegacionService } from './barra-navegacion.service';

describe('BarraNavegacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarraNavegacionService = TestBed.get(BarraNavegacionService);
    expect(service).toBeTruthy();
  });
});
