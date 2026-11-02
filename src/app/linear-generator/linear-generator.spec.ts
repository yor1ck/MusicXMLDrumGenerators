import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearGenerator } from './linear-generator';

describe('LinearGenerator', () => {
  let component: LinearGenerator;
  let fixture: ComponentFixture<LinearGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(LinearGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
