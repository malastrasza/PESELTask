import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  disabled = true;
  show = false;
  numbers = {};
  inputValue = 0;

  peselFormControl = new FormControl('', [
    Validators.minLength(11),
    Validators.required
  ]);

  constructor(private apiService: ApiService) {}

  onKeyUp(event) {
    this.inputValue = parseInt(event.target.value, 10);
    this.disabled = !this.validatePesel(this.inputValue);
  }

  getNum() {
    this.show = true;
    this.apiService.getNumber(this.inputValue).subscribe(data => {
      this.numbers = data;
    });
  }

  clearNum() {
    this.show = false;
  }

  onSubmit() {
    this.getNum();
  }

  validatePesel(pesel) {
    pesel = pesel.toString();
    const weight = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
    let sum = 0;

    for (let i = 0; i < weight.length; i++) {
      sum += parseInt(pesel.substring(i, i + 1), 10) * weight[i];
    }

    sum = sum % 10;

    const num = parseInt(pesel.substring(10, 11), 10);
    const valid = sum === num;

    return valid;
  }
}
