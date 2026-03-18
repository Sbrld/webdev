import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  error: string | null = null;

  editedTitle = '';
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.error = 'Invalid album id';
      this.loading = false;
      return;
    }

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album';
        this.loading = false;
      },
    });
  }

  save(): void {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.editedTitle };

    this.saving = true;
    this.albumService.updateAlbum(updated).subscribe({
      next: (data) => {
        this.album = data;
        this.saving = false;
      },
      error: () => {
        this.error = 'Failed to save';
        this.saving = false;
      },
    });
  }

  viewPhotos(): void {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  backToList(): void {
    this.router.navigate(['/albums']);
  }
}
