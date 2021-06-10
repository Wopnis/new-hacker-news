import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { CommentsPageComponent } from './comments-page/comments-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'news/:id', component: NewsPageComponent},
      {path: 'comments', component: CommentsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
