import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CustomCheckboxComponent {
  @Input() disabled: boolean = false;

  checked: boolean = false;

  onChange(e: boolean) {
    this.checked = e;
  }

  onFocus() {
    console.log(12);
    
  }
}
