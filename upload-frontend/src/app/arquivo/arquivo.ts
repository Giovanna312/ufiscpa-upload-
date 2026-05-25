import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-arquivo',
  standalone: true,
  imports: [],
  templateUrl: './arquivo.html',
  styleUrl: './arquivo.css',
})
export class Arquivo {

  file!: File;

  constructor(private photoService: PhotoService) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    console.log('Arquivo selecionado:', this.file);
  }

  upload() {
    console.log('Tentando enviar:', this.file);

    if (!this.file) {
      console.log('Nenhum arquivo selecionado!');
      return;
    }

    this.photoService.upload(this.file).subscribe({
      next: (res) => {
        console.log('Upload feito com sucesso!', res);
      },
      error: (err) => {
        console.error('Erro no upload:', err);
      }
    });
  }
}