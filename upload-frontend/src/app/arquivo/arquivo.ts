import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.html'
})
export class ArquivoComponent implements OnInit {

  photos: any[] = [];
  loading = false;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.loading = true;

    this.photoService.getPhotos().subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.photoService.uploadPhoto(file).subscribe({
      next: (newPhoto) => {
        // ⭐ diferencial (sem F5)
        this.photos = [newPhoto, ...this.photos];
      }
    });
  }
}
