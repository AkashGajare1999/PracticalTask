import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { SavedMatchesComponent } from './saved-matches/saved-matches.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AgePipe } from './pipe/age.pipe';
import { CardDetailsComponent } from './card-details/card-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NameFilterPipe } from './name-filter.pipe'; 
@NgModule({
  declarations: [
    AppComponent,
    AllMatchesComponent,
    SavedMatchesComponent,
    AgePipe,
    CardDetailsComponent,
    PersonListComponent,
    AddFormComponent,
    EditFormComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,MatListModule, FormsModule, MatSidenavModule,RouterModule, HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
