import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempMessagesComponent } from './temp-messages.component';

describe('TempMessagesComponent', () => {
  let component: TempMessagesComponent;
  let fixture: ComponentFixture<TempMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
