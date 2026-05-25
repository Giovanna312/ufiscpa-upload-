import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivoService } from '../service/arquivo.service';


@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.html',
})
export class UploadComponent implements OnInit {

  arquivoSelecionado!: File;

  arquivos: any[] = [];

  mensagem = '';

  carregando = false;

  constructor(
    private arquivoService: ArquivoService

  ) {}

  ngOnInit(): void {
    this.buscarArquivos();
  }

  selecionarArquivo(event: any) {
    this.arquivoSelecionado = event.target.files[0];
  }

  enviarArquivo() {

    if (!this.arquivoSelecionado) {
      this.mensagem = 'Selecione um arquivo.';
      return;
    }

    this.carregando = true;

    this.arquivoService
      .upload(this.arquivoSelecionado)
      .subscribe({
        next: (res: any) => {

          this.mensagem = res.message;

          this.carregando = false;

          this.buscarArquivos();
        },

        error: (err: any) => {
          this.carregando = false;

          this.mensagem =
            err.error.message || 'Erro ao enviar arquivo';
        }
      });
  }

  buscarArquivos() {

    this.arquivoService
      .listarArquivos()
      .subscribe({
  next: (res: any) => {
    this.arquivos = res.files;
  }
});
  }

  deletar(filename: string) {

    this.arquivoService
      .deletarArquivo(filename)
      .subscribe({
        next: () => {
          this.buscarArquivos();
        }
      });
  }
}