import { Component, Input, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss'
})
export class CustomSelectComponent {
  @Input() label: string = 'Input';
  @Input() name: string = 'input';
  @Input() errorMessage: string = '';
  @Input() disabled: boolean = true;
  @Input() defaultValue: string = 'Text'

  value: string = this.defaultValue;

  isFocused: boolean = false;
  hasError: boolean = false;

  options: string[] = ['Text','Text 1','Text 2','Text 3','Text 4']

  constructor(private elementRef: ElementRef) {}

  onChange(event: any) {
    this.value = event.target.value;
  }

  onFocus() {
    this.isFocused = !this.isFocused;
  }

  selectOption(option: string) {
    this.value = option;
    this.isFocused = !this.isFocused;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(target) && this.isFocused) {
      this.isFocused = false;
    }
  }
}
