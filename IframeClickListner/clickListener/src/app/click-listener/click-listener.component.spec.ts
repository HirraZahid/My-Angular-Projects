import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickListenerComponent } from './click-listener.component';

describe('ClickListenerComponent', () => {
  let component: ClickListenerComponent;
  let fixture: ComponentFixture<ClickListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickListenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
