import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CustomCheckboxComponent {
  @Input() disabled: boolean = false;
  @Input() size: "small" | "medium" | "large" = 'medium';

  checked: boolean = false;

  onChange(e: boolean) {
    this.checked = e;
  }
}
