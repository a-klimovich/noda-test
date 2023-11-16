import { Component } from '@angular/core';
import { FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-section-welcome',
  templateUrl: './section-welcome.component.html',
  styleUrl: './section-welcome.component.scss'
})
export class SectionWelcomeComponent {
  inputOne = true;
  inputTwo = new FormControl(true);

  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      myFormControl: true
    });
  }
}
