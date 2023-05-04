import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';

const routes: Routes = [
  {path:'', pathMatch:'full' , redirectTo: 'boards' , component: BoardsComponent},
  {path:'boards', component: BoardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
