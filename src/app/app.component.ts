import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import MediumEditor from 'medium-editor';
import { User } from './services/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: User;
  public editor;
  constructor(public auth: AuthService) {}
  
  @ViewChild('media', {static: false}) media: ElementRef;

  ngAfterViewInit() {
    const edit = this.media.nativeElement;
    this.editor = new MediumEditor(edit, {
      placeholder: false
    });

    this.auth.user$.subscribe({
      next(data) {
        this.user = data;
      }
    })

    this.editor.subscribe('editableInput', function(editor, editable) {
      console.log(editable.textContent)
    })
  }
}


