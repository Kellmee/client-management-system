import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css'],
})
export class CreateMeetingComponent {
  public formData: FormGroup;
  public isSumbitted: Boolean = false;
  public isMissingInfo: Boolean = false;

  constructor() {
    this.formData = new FormGroup({
      meetingTopic: new FormControl('', [Validators.required]),
      numberPeople: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[0-9]*$'),
      ]),
      startDate: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
    });

    this.formData.valueChanges.subscribe((formValues) => {
      this.isMissingInfo = false;
    });
  }

  onClickSubmit() {
    if (this.formData.valid) {
      this.isSumbitted = true;
    } else {
      this.isMissingInfo = true;
    }
  }
}
