import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  private api = 'http://localhost:3000/arquivo';

  constructor(private http: HttpClient) {}

  upload(file: File) {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(
      `${this.api}/upload`,
      formData
    );
  }

  listarArquivos() {
    return this.http.get<any>(this.api);
  }

  deletarArquivo(filename: string) {
    return this.http.delete(
      `${this.api}/${filename}`
    );
  }
}