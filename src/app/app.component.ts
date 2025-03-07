import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from './primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './core/services/theme.service';
import { MessageService } from 'primeng/api';
import { ToastService } from './core/services/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimengModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, ToastService],
})
export class AppComponent {
  private themeSvc = inject(ThemeService);

  constructor() {
    this.themeSvc.initTheme();
  }
}
