import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrapGenerator } from './trap-generator';

describe('TrapGenerator', () => {
  let component: TrapGenerator;
  let fixture: ComponentFixture<TrapGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrapGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(TrapGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
