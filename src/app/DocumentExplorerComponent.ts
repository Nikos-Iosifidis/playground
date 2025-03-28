import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-document-explorer',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule],
  template: `
    <div>
      <h3>Folder: {{ folderId }}</h3>
      <p>Loading contents...</p>
    </div>
  `,
})
export class DocumentExplorerComponent implements OnInit {
  folderId!: string;

  constructor(private route: ActivatedRoute) {
    console.log('DocumentExplorerComponent initialized');
  }

  ngOnInit(): void {
    console.log('DocumentExplorerComponent ngOnInit called');
    this.route.params.subscribe((params) => {
      console.log('Route params:', params);
      this.folderId = params['folderId'];
      this.loadFolderContents();
    });
  }

  loadFolderContents(): void {
    console.log('Fetching files for folder:', this.folderId);
  }
}
