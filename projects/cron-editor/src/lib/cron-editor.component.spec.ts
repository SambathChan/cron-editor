import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CronEditorComponent } from './cron-editor.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { CronOptions } from './CronOptions';

describe('CronEditorComponent', () => {
  let component: CronEditorComponent;
  let fixture: ComponentFixture<CronEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CronEditorComponent, TimePickerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronEditorComponent);
    component = fixture.componentInstance;
    component.options = {
      defaultTime: '10:00:00',
      use24HourTime: true,
      removeSeconds: true,
      removeYears: true
    } as CronOptions;
    component.cron = '0 12 1W 1/1 ?';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
