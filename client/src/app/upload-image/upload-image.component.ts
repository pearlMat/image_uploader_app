import { Component,  ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFileUploaderConfig } from 'angular-file-uploader';
import {FileUploaderConfig} from '../file-uploader/file-uploader.types';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit  {

// selectedFiles = [];
 resetUpload3: boolean;

   afuConfig: FileUploaderConfig = {
    theme: 'dragNDrop',
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    maxSize: 5,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
   // url:'http://localhost:3000/upload'
    },
    formatsAllowed: '.jpg,.jpeg,.png',
     multiple: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Choose a file',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
     // dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor() { }

  ngOnInit() {
  }

   docUpload(event) {
    console.log('ApiResponse -> docUpload -> Event: ',event);
  }

}
