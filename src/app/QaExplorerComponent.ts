import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-document-explorer',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule],
  template: `
    <div>
      <h3>QA: {{ folderId }}</h3>
      <p>Loading contents...</p>
    </div>
  `,
})
export class QaExplorerComponent implements OnInit {
  folderId!: string;

  constructor(private route: ActivatedRoute) {
    console.log('QaExplorerComponent initialized');
  }

  ngOnInit(): void {
    console.log('QaExplorerComponent ngOnInit called');
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
