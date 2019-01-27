import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule, DYNAMIC_FORM_CONTROL_MAP_FN, DynamicFormControlModel, DynamicFormControl } from '@ng-dynamic-forms/core';
import { AppComponent } from './app.component';
import { DynamicFormsPrimeNGUIModule } from '@ng-dynamic-forms/ui-primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule, ButtonModule, PanelModule, RadioButtonModule, InputTextModule, CalendarModule, AutoCompleteModule, DropdownModule, InputMaskModule } from 'primeng/primeng';
import { CustomDynamicPrimeNGInputComponent } from 'src/app/input/custom-dynamic-primeng-input.component';
import { CustomDynamicPrimeNGFormGroupComponent } from 'src/app/form-group/custom-dynamic-primeng-form-group.component';
import { CustomDynamicPrimeNGFormArrayComponent } from 'src/app/form-array/custom-dynamic-primeng-form-array.component';

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
    CalendarModule,
    AutoCompleteModule,
    DropdownModule,
    InputMaskModule
  ],
  declarations: [
    AppComponent,
    CustomDynamicPrimeNGInputComponent,
    CustomDynamicPrimeNGFormGroupComponent,
    CustomDynamicPrimeNGFormArrayComponent
  ],
  providers: [
    {
      provide: DYNAMIC_FORM_CONTROL_MAP_FN,
      useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null => {
        switch (model.type) {
          case 'INPUT':
            return CustomDynamicPrimeNGInputComponent;
          case 'GROUP':
            return CustomDynamicPrimeNGFormGroupComponent;
          case 'ARRAY':
            return CustomDynamicPrimeNGFormArrayComponent;
        }
      }
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomDynamicPrimeNGInputComponent,
    CustomDynamicPrimeNGFormGroupComponent,
    CustomDynamicPrimeNGFormArrayComponent
  ]
})
export class AppModule { }
