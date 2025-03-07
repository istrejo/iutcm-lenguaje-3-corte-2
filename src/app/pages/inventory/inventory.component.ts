import { Component } from '@angular/core';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-inventory',
  imports: [PrimengModule, TableComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export default class InventoryComponent {}
