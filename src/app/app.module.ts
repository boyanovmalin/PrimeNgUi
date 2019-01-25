import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule, DYNAMIC_FORM_CONTROL_MAP_FN, DynamicFormControlModel, DynamicFormControl } from '@ng-dynamic-forms/core';
import { AppComponent } from './app.component';
import { DynamicFormsPrimeNGUIModule } from '@ng-dynamic-forms/ui-primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule, ButtonModule, PanelModule, RadioButtonModule, InputTextModule, CalendarModule } from 'primeng/primeng';
import { CustomDynamicPrimeNGInputComponent } from 'src/app/input/custom-dynamic-primeng-input.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsPrimeNGUIModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    CalendarModule
  ],
  declarations: [
    AppComponent,
    CustomDynamicPrimeNGInputComponent
  ],
  providers: [
    {
      provide: DYNAMIC_FORM_CONTROL_MAP_FN,
      useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null => {
        switch (model.type) {
          case 'INPUT':
            return CustomDynamicPrimeNGInputComponent;
        }
      }
    }],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomDynamicPrimeNGInputComponent
  ]
})
export class AppModule { }
