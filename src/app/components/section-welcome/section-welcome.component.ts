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

  selectOptions: string[] = ['Text','Text 1','Text 2','Text 3','Text 4']

  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      myFormControl: true
    });
  }
}
