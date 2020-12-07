import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UploadImageComponent } from './upload-image/upload-image.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploaderModule } from './file-uploader/file-uploader.module';




@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,

    FileUploaderModule,

    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
