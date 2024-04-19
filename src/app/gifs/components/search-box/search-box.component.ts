import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})

// #txtTagInput es una referencia local para nuestro evento keyup
// y asi evitamos utilizar el formsModule para algo mas sencillo
export class SearchBoxComponent {
  // ! significa que el elemento no sera nulo
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    if (newTag.length === 0 || newTag.trim().length === 0) return;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
