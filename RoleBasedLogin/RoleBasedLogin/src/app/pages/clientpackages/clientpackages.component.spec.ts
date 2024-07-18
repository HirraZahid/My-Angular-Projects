import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientpackagesComponent } from './clientpackages.component';

describe('ClientpackagesComponent', () => {
  let component: ClientpackagesComponent;
  let fixture: ComponentFixture<ClientpackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientpackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
