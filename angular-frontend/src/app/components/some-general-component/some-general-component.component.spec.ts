import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeGeneralComponentComponent } from './some-general-component.component';

describe('SomeGeneralComponentComponent', () => {
  let component: SomeGeneralComponentComponent;
  let fixture: ComponentFixture<SomeGeneralComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeGeneralComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeGeneralComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
