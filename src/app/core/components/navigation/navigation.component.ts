import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@Component({
  selector: 'app-navigation',
  imports: [PrimengModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  private router = inject(Router);
  public items: any[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-users',
        command: () => {
          this.router.navigate(['/customers']);
        },
      },
      {
        label: 'Gastos mensuales',
        icon: 'pi pi-calculator',
        command: () => {
          this.router.navigate(['/monthly-expenses']);
        },
      },
      {
        label: 'Inventario',
        icon: 'pi pi-wallet',
        command: () => {
          this.router.navigate(['/inventory']);
        },
      },
    ];
  }
}
