import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InventoryService } from 'src/app/core/services/inventory.service';
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
  private inventorySvc = inject(InventoryService);
  private toastService = inject(ToastService);
  public products = this.inventorySvc.inventory;
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<boolean>();
  form!: FormGroup;

  constructor() {
    this.initForm();
  }

  /* The `initForm()` method in the `FormComponent` class is initializing the form group for the
  reactive form used in the component. It is creating a FormGroup instance using the FormBuilder
  service (`this.fb`) and defining the form controls with their initial values and validators. */
  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.email]],
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
   * The onSubmit function adds a new product with user input data to the inventory and displays a
   * success message.
   */
  onSubmit() {
    const { name, price, quantity, description } = this.form.value;
    const maxId = this.products().reduce(
      (max, customer) => (customer.id > max ? customer.id : max),
      0
    );

    const newId = maxId + 1;

    const customerToAdd = {
      id: newId,
      name,
      price,
      quantity,
      description,
    };

    this.inventorySvc.addProduct(customerToAdd);
    this.visible = false;
    this.toastService.success('Producto agregado con éxito.');
  }
}
