import { Component } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { NavigationComponent } from '../core/components/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [PrimengModule, NavigationComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {

}
