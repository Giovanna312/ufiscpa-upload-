import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Arquivo } from './arquivo/arquivo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Arquivo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('upload-frontend');
}
