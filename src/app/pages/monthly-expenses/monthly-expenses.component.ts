import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';

@Component({
  selector: 'app-monthly-expenses',
  imports: [ReactiveFormsModule, CalculatorComponent],
  templateUrl: './monthly-expenses.component.html',
  styleUrl: './monthly-expenses.component.scss',
})
export default class MonthlyExpensesComponent {}
