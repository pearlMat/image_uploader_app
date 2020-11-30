import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadImageComponent } from './upload-image/upload-image.component';


const routes: Routes = [
 {
    path: 'upload-image',
    component: UploadImageComponent,
    data: { title: 'Upload Image' }
  },
  
  { path: '',
    redirectTo: '/upload-image',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


