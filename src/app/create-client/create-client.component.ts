import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent {
  public formData: FormGroup;
  public isSumbitted: Boolean = false;
  public isMissingInfo: Boolean = false;

  constructor() {
    this.formData = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      address: new FormControl('', [Validators.required]),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
    });

    this.formData.valueChanges.subscribe((formValues) => {
      console.log('the form has changed', formValues);
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
