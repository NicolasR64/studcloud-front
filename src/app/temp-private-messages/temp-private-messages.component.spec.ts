import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPrivateMessagesComponent } from './temp-private-messages.component';

describe('TempPrivateMessagesComponent', () => {
  let component: TempPrivateMessagesComponent;
  let fixture: ComponentFixture<TempPrivateMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempPrivateMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempPrivateMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
