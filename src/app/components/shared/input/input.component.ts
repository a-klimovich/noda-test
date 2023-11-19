import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = 'Input';
  @Input() name: string = 'input';
  @Input() errorMessage: string = '';
  @Input() disabled: boolean = false;

  value: string = '';

  isFocused: boolean = false;
  hasError: boolean = false;

  onChange(event: any) {
    this.value = event.target.value;
  }

  onFocus() {
    this.isFocused = !this.isFocused;
  }

  onBlur() {
    this.isFocused = !this.isFocused;
  }
}
