import { NgModule } from '@angular/core';
import { InputComponent } from '../../components/shared/input/input.component'
import { CustomCheckboxComponent } from '../../components/shared/checkbox/checkbox.component';
import { SelectComponent } from '../../components/shared/select/select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  declarations: [InputComponent, CustomCheckboxComponent, SelectComponent],
  exports: [InputComponent, CustomCheckboxComponent, SelectComponent],
})
export class FormControlsModule { }
