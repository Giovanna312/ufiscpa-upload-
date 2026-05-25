import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ArquivoComponent } from '../arquivo/arquivo';

describe('ArquivoComponent', () => {
  let component: ArquivoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArquivoComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    const fixture = TestBed.createComponent(ArquivoComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});