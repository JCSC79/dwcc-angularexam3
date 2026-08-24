import { Component } from '@angular/core';
import { XogoComponent } from './xogo/xogo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [XogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movemento Personaxe';
}
