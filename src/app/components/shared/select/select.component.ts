import { Component, Input, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SelectOption } from '../../../models/select-options.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() label: string = 'Select';
  @Input() options: SelectOption[] = [];
  @Input() errorMessage: string = '';
  @Input() disabled: boolean = false;
  
  selectedOption: SelectOption = {
    label: '',
    value: '',
  };

  isDropdownOpen: boolean = false;
  hasError: boolean = false;

  constructor(private el: ElementRef) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: SelectOption) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}
