import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { View1Component } from './view1/view1.component';
import { IgxButtonModule, IgxToggleModule, IgxIconModule, IgxDialogModule, IgxCheckboxModule, IgxInputGroupModule, IgxNavbarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    View3Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxToggleModule,
    IgxIconModule,
    IgxDialogModule,
    IgxCheckboxModule,
    IgxInputGroupModule,
    FormsModule,
    IgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
