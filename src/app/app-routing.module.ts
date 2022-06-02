import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormDialogComponent } from './pages/create-form-dialog/create-form-dialog.component';
import { CreateformComponent } from './pages/createform/createform.component';
import { FormbuildfieldComponent } from './pages/formbuildfield/formbuildfield.component';
import { FormbulderComponent } from './pages/formbulder/formbulder.component';
import { FormfildComponent } from './pages/formfild/formfild.component';

const routes: Routes = [

    {
      path: 'formbuilder',
      component:FormbulderComponent,
      pathMatch:'full',
    },
    {
      path: 'fildform',
      component: FormfildComponent,
      pathMatch:'full',
    },
    {
      path: 'formdialog',
      component: CreateFormDialogComponent,
      pathMatch:'full',
    },
    {
      path: 'createform/:formid',
      component: CreateformComponent,
      pathMatch:'full',
    },
    { 
      path: '',
      redirectTo:'formbuilder',
      pathMatch:'full',
    },
    {
      path: 'formbuildFields/:formId',
      component: FormbuildfieldComponent,
      pathMatch:'full',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
