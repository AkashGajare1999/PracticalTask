import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { SavedMatchesComponent } from './saved-matches/saved-matches.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  {path:'',redirectTo:'AllMatchesComponent',pathMatch:'full'},
  {path:'AllMatchesComponent',component:AllMatchesComponent},
  {path:'SavedMatchesComponent',component:SavedMatchesComponent},
  {path:'AddFormComponent',component:AddFormComponent},
  {path:'EditFormComponent',component:EditFormComponent},

 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
