import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmisorComponent } from './emisor/emisor.component';
import { ReceptorComponent } from './receptor/receptor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmisorComponent, ReceptorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'novo';
}
