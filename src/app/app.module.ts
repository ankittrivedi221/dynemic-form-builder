import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderbarComponent } from './components/sliderbar/sliderbar.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list';
import { FormbulderComponent } from './pages/formbulder/formbulder.component'; 
import {MatButtonModule} from '@angular/material/button';
import { FormfildComponent } from './pages/formfild/formfild.component';
import {MatFormFieldModule } from '@angular/material/form-field'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import{HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 
import {  MatSortModule } from '@angular/material/sort';
import { CreateFormDialogComponent } from './pages/create-form-dialog/create-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { CreateformComponent } from './pages/createform/createform.component';
import { MatInputModule } from "@angular/material/input";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTreeModule} from '@angular/material/tree'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { FormbuildfieldComponent } from './pages/formbuildfield/formbuildfield.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderbarComponent,
    FormbulderComponent,
    FormfildComponent,
    CreateFormDialogComponent,
    CreateformComponent,
    FormbuildfieldComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatSidenavModule,
    MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
