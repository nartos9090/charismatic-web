import { Component } from '@angular/core';

@Component({
  selector: 'app-editor-detail-generate',
  templateUrl: './editor-detail-generate.component.html',
  styleUrl: './editor-detail-generate.component.scss'
})
export class EditorDetailGenerateComponent {

  prompt = ''

  onKeyPrompt(event: KeyboardEvent) {
    this.prompt = (event.target as HTMLInputElement).value
  }

  constructor() {
  }

  onSubmit() {
    alert('Thanks!');
  }
}
