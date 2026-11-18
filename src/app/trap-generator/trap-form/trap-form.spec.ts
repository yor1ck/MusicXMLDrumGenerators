import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrapForm } from './trap-form';

describe('TrapForm', () => {
  let component: TrapForm;
  let fixture: ComponentFixture<TrapForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrapForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TrapForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
