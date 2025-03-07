import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBuilderComponent } from './ui-builder.component';

describe('UiBuilderComponent', () => {
  let component: UiBuilderComponent;
  let fixture: ComponentFixture<UiBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
