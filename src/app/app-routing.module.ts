import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {path:'listpost', component:ListPostComponent},
  {path:'addpost', component:AddPostComponent},
  {path:'updatepost/:id', component:UpdatePostComponent},
  { path: "", redirectTo: "listpost", pathMatch: "full" },
  {path:'**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
