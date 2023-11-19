import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from '../../components/shared/input/input.component'
import { CustomCheckboxComponent } from '../../components/shared/checkbox/checkbox.component';
import { SelectComponent } from '../../components/shared/select/select.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [InputComponent, CustomCheckboxComponent, SelectComponent],
  exports: [InputComponent, CustomCheckboxComponent, SelectComponent],
})
export class FormControlsModule { }
