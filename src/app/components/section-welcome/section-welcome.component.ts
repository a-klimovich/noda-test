import { Component } from '@angular/core';
import { FormControl, FormBuilder } from "@angular/forms";
import { SelectOption } from '../../models/select-options.model';

@Component({
  selector: 'app-section-welcome',
  templateUrl: './section-welcome.component.html',
  styleUrl: './section-welcome.component.scss'
})
export class SectionWelcomeComponent {
  inputOne = true;
  inputTwo = new FormControl(true);

  selectOptions: SelectOption[] = [
    {
      label: 'Text',
      value: '1'
    },
    {
      label: 'Text 1',
      value: '2'
    },
    {
      label: 'Text 2',
      value: '3'
    },
    {
      label: 'Text 3',
      value: '4'
    },
  ]

  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      myFormControl: true
    });
  }
}
