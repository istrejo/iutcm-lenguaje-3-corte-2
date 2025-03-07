import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@Component({
  selector: 'app-form',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private customerSvc = inject(CustomerService);
  private toastService = inject(ToastService);
  public customers = this.customerSvc.customers;
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<boolean>();
  form!: FormGroup;

  /**
   * The constructor initializes a form in TypeScript.
   */
  constructor() {
    this.initForm();
  }

  /**
   * The `initForm` function initializes a form group with fields for name, lastname, age, and email
   * with corresponding validation rules.
   */
  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * The close function emits a false value and resets a form.
   */
  close() {
    this.closed.emit(false);
    this.form.reset();
  }

  /**
   * The onSubmit function adds a new customer with the provided details to a list of customers and
   * displays a success message.
   */
  onSubmit() {
    const { name, lastname, age, email } = this.form.value;
    const maxId = this.customers().reduce(
      (max, customer) => (customer.id > max ? customer.id : max),
      0
    );

    const newId = maxId + 1;

    const customerToAdd = {
      id: newId,
      name: `${name} ${lastname}`,
      age,
      email,
    };

    this.customerSvc.addCustomer(customerToAdd);
    this.visible = false;
    this.toastService.success('Cliente agregado con éxito.');
  }
}
