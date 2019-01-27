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
    "address": {
      "element": {
          "control": "ui-g"
      }
    },
    "sampleSelect": {
      "element": {
          "host": "input-element-host ui-g-12 ui-md-6 ui-lg-3"
      }
    },
    "street": {
      "element": {
          "host": "ui-g-12 ui-md-6 ui-lg-3"
      }
    },
    "autoComplete": {
      "element": {
          "host": "ui-g-12 ui-md-6 ui-lg-3"
      }
    },
    "from": {
      "element": {
          "host": "ui-g-12 ui-md-6 ui-lg-3"
      }
    },
    "maskedInput": {
      "element": {
          "host": "ui-g-12 ui-md-6 ui-lg-3"
      }
    },
    "sampleRadioGroup": {
      "element": {
          "host": "ui-g-12 ui-md-6 ui-lg-3"
      }
    },
    "test": {
      "element": {
          "container": "input-element-container",
          "control": "input-element-control",
          "errors": "input-element-errors",
          "group": "input-element-group",
          "hint": "input-element-hint",
          "host": "input-element-host",
          "label": "input-element-label",
          "option": "input-element-option"
      },
      "grid": {
          "container": "input-grid-container",
          "control": "input-grid-control",
          "errors": "input-grid-errors",
          "group": "input-grid-group",
          "hint": "input-grid-hint",
          "host": "input-grid-host",
          "label": "input-grid-label",
          "option": "input-grid-option"
      }
    }
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
          placeholder: "Sample input"
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
        {
          type: "INPUT",
          id: "maskedInput",
          label: "Masked Input",
          mask: ['(', '/[1-9]/', '/\\d/', '/\\d/', ')', ' ', '/\\d/', '/\\d/', '/\\d/', '-', '/\\d/', '/\\d/', '/\\d/', '/\\d/'],
        },
        {
          type: "RADIO_GROUP",
          id: "sampleRadioGroup",
          label: "Sample Radio Group",
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
          ],
          value: "option-3"
        }
      ],
    },
    {
      type: "ARRAY",
      id: "myFormArray",
      initialCount: 2,
      groupPrototype: [
        {
          type: "INPUT",
          id: "type",
          label: "Type"
        },
        {
          type: "INPUT",
          id: "color",
          label: "Color"
        }
      ]
    },
    {
      type: "CHECKBOX",
      id: "sampleCheckbox",
      label: "I do agree"
    },
    {
      type: "TEXTAREA",
      id: "myTextArea",
      label: "My Textarea",
      relation: [
        {
          action: "DISABLE",
          when: [
            {
              id: "sampleCheckbox",
              value: true
            }
          ]
        }
      ]
    }
  ];
  protected formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formModel = this.formService.fromJSON(this.json);
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formGroup.patchValue({
      "address": {
        "sampleSelect": "option-2"
      },
      "myFormArray": [
        { "type": 'Super' }
      ]
    });
  }

  onClick() {
    console.log(this.formGroup.getRawValue());
  }
}
