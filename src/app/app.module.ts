import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
// import { MediumEditorDirective } from 'angular-medium-editor/medium-editor.directive';

const config = {
  apiKey: "AIzaSyCH5WV2PMjLFCVKOhWPEkWOMFN6u02GcEo",
  authDomain: "penciltakehomeassessment.firebaseapp.com",
  databaseURL: "https://penciltakehomeassessment.firebaseio.com",
  projectId: "penciltakehomeassessment",
  storageBucket: "penciltakehomeassessment.appspot.com",
  messagingSenderId: "657209122428",
  appId: "1:657209122428:web:602cde9017731e4aad33f9",
  measurementId: "G-Q366Z42NYF"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule 
  ],
  declarations: [
    AppComponent
    // MediumEditorDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
