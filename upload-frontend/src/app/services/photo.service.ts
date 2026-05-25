import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface Foto {
  id?: number;
  url: string;      
  titulo?: string;  
}

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  private http = inject(HttpClient);
  
 
  private readonly API_URL = 'http://localhost:3000/arquivo'; 

  fotos = signal<Foto[]>([]);
  loading = signal<boolean>(false);


  carregarFotos() {
    this.loading.set(true);
    this.http.get<Foto[]>(this.API_URL).subscribe({
      next: (dados) => {
        this.fotos.set(dados);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar fotos do backend:', err);
        this.loading.set(false);
      }
    });
  }

 
  uploadFoto(arquivo: File) {
    const formData = new FormData();
    
    
    formData.append('file', arquivo); 

    this.loading.set(true);

    return this.http.post<Foto>(this.API_URL, formData).pipe(
      tap((novaFoto) => {
        this.fotos.update((listaAtual) => [novaFoto, ...listaAtual]);
        this.loading.set(false);
      })
    );
  }
}