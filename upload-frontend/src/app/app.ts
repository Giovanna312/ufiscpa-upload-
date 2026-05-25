import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArquivoComponent } from './arquivo/arquivo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArquivoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('upload-frontend');
}
