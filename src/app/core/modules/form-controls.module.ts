import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from '../../components/shared/input/input.component'
import { CustomCheckboxComponent } from '../../components/shared/checkbox/checkbox.component';
import { CustomSelectComponent } from '../../components/shared/custom-select/custom-select.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [InputComponent, CustomCheckboxComponent, CustomSelectComponent],
  exports: [InputComponent, CustomCheckboxComponent, CustomSelectComponent],
})
export class FormControlsModule { }
