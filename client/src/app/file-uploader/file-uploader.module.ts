import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [FileUploaderComponent],
  imports: [
    CommonModule,
     LoadingBarHttpClientModule,
     LoadingBarModule ,
      NgbModule
    

  ],
   exports: [FileUploaderComponent, ProgressbarModule, LoadingBarModule ]
})
export class FileUploaderModule { }
