import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface Foto {
  id?: number;
  url: string;      
  titulo?: string;  
}

@Component({
  selector: 'app-arquivo', // Ajustado para bater com a tag que você vai usar no HTML
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './arquivo.html' // Ajustado para apontar para o seu arquivo HTML dessa pasta
})
export class ArquivoComponent implements OnInit { // Nome alterado para ArquivoComponent para o app.component achar!
  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:3000/api/arquivo'; 

  fotos = signal<Foto[]>([]);
  loading = signal<boolean>(false);

  ngOnInit() {
    this.carregarFotos();
  }

  carregarFotos() {
    this.loading.set(true);
    this.http.get<Foto[]>(this.API_URL).subscribe({
      next: (dados) => {
        this.fotos.set(dados);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar fotos:', err);
        this.loading.set(false);
      }
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      const arquivo = input.files[0];
      const formData = new FormData();
      
      formData.append('file', arquivo); 

      this.loading.set(true);

      this.http.post<Foto>(this.API_URL, formData).subscribe({
        next: (novaFoto) => {
          this.fotos.update((listaAtual) => [novaFoto, ...listaAtual]);
          this.loading.set(false);
          input.value = ''; 
        },
        error: (err) => {
          console.error('Erro no upload:', err);
          this.loading.set(false);
        }
      });
    }
  }
}