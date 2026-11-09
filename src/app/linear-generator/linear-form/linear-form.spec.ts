import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearForm } from './linear-form';

describe('LinearForm', () => {
  let component: LinearForm;
  let fixture: ComponentFixture<LinearForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LinearForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
