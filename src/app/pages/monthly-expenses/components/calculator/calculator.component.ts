import { CardModule } from 'primeng/card';
import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-calculator',
  imports: [
    ReactiveFormsModule,
    CurrencyPipe,
    CardModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  private fb = inject(FormBuilder);
  public form!: FormGroup;
  public total = signal<number>(0);

  /**
   * The constructor initializes a form in TypeScript.
   */
  constructor() {
    this.initForm();
  }

  /**
   * The `initForm` function initializes a form group with fields for salaries, services, rental, and
   * others.
   */
  initForm() {
    this.form = this.fb.group({
      salaries: ['', [Validators.required]],
      services: ['', [Validators.required]],
      rental: ['', [Validators.required]],
      others: ['', []],
    });
  }

  /**
   * The `calculate` function in TypeScript retrieves values from form inputs and calculates the total
   * sum before setting it to a variable.
   */
  calculate() {
    const { salaries, services, rental, others } = this.form.value;
    console.log(salaries + services + rental + others);
    this.total.set(salaries + services + rental + others);
  }
}
