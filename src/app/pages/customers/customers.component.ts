import { Component } from '@angular/core';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';

@Component({
  selector: 'app-customers',
  imports: [CustomerTableComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export default class CustomersComponent {

}
