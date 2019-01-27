import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService, DynamicFormControlModel, DynamicFormLayout } from '@ng-dynamic-forms/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected formModel: DynamicFormControlModel[];
  protected formLayout: DynamicFormLayout = {
    // "street": {
    //   "element": {
    //       "container": "input-element-container",
    //       "control": "input-element-control",
    //       "errors": "input-element-errors",
    //       "group": "input-element-group",
    //       "hint": "input-element-hint",
    //       "host": "input-element-host",
    //       "label": "input-element-label",
    //       "option": "input-element-option"
    //   },
    //   "grid": {
    //       "container": "input-grid-container",
    //       "control": "input-grid-control",
    //       "errors": "input-grid-errors",
    //       "group": "input-grid-group",
    //       "hint": "input-grid-hint",
    //       "host": "input-grid-host",
    //       "label": "input-grid-label",
    //       "option": "input-grid-option"
    //   }
    // }
  };

  json: any = [
    {
      type: "GROUP",
      id: "address",
      legend: "Address",
      group: [
        {
          type: "INPUT",
          id: "street",
          label: "Street",
          placeholder: "Sample input",
          // validators: {
          //   required: null,
          //   minLength: 3
          // },
          // errorMessages: {
          //   required: "{{ label }} is required.",
          //   minLength: "{{ label }} min length not meet."
          // }
        },
        {
          type: "INPUT",
          id: "autoComplete",
          label: "Autocomplete",
          list: ["Alabama", "Alaska", "Arizona", "Arkansas"]
        },
        {
          type: "DATEPICKER",
          id: "from",
          label: "From"
        }
      ]
    },
    {
      type: "CHECKBOX",
      id: "sampleCheckbox",
      label: "I do agree"
    },
    {
      type: "SELECT",
      id: "sampleSelect",
      label: "Select",
      options: [
        {
          label: "Option 1",
          value: "option-1",
        },
        {
          label: "Option 2",
          value: "option-2"
        },
        {
          label: "Option 3",
          value: "option-3"
        }
      ]
    },
    // {
    //   type: "INPUT",
    //   id: "maskedInput",
    //   label: "Masked Input",
    //   mask: ['(', '/[1-9]/', '/\\d/', '/\\d/', ')', ' ', '/\\d/', '/\\d/', '/\\d/', '-', '/\\d/', '/\\d/', '/\\d/', '/\\d/'],
    // },
    // {
    //   type: "TEXTAREA",
    //   id: "myTextArea",
    //   label: "My Textarea",
    //   relation: [
    //     {
    //       action: "DISABLE",
    //       when: [
    //         {
    //           id: "sampleCheckbox",
    //           value: true
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   type: "ARRAY",
    //   id: "myFormArray",
    //   initialCount: 1,
    //   groupPrototype: [
    //     {
    //       type: "INPUT",
    //       id: "myInput",
    //       label: "MyInput"
    //     },
    //     {
    //       type: "INPUT",
    //       id: "myInput1",
    //       label: "MyInput1"
    //     }
    //   ]
    // },
    // {
    //   type: "RADIO_GROUP",
    //   id: "sampleRadioGroup",
    //   label: "Sample Radio Group",
    //   options: [
    //     {
    //       label: "Option 1",
    //       value: "option-1",
    //     },
    //     {
    //       label: "Option 2",
    //       value: "option-2"
    //     },
    //     {
    //       label: "Option 3",
    //       value: "option-3"
    //     }
    //   ],
    //   value: "option-3"
    // },
    // {
    //   type: "CHECKBOX",
    //   id: "sampleCheckbox",
    //   label: "I do agree"
    // }
  ];
  protected formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formModel = this.formService.fromJSON(this.json);
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formGroup.patchValue({
      "fullName": {
        "firstName": "London",
        "lastName": "Walker"
      },
      "myFormArray": [
        { "myInput": 'Yahoo' }
      ]
    });
  }

  onClick() {
    console.log(this.formGroup.getRawValue());
  }
}
