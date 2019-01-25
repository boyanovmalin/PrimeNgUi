import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputText } from "primeng/primeng";
import {
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicFormControlComponent,
    DynamicInputModel
} from "@ng-dynamic-forms/core";

@Component({
    selector: "custom-dynamic-primeng-input",
    templateUrl: "./custom-dynamic-primeng-input.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDynamicPrimeNGInputComponent extends DynamicFormControlComponent implements AfterViewInit {
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicInputModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("pInputText") pInputText: InputText;

    ngAfterViewInit(): void {
        setTimeout(() => {
            // this.layout[this.model.id] = Object.assign(this.layout[this.model.id] || {}, { "grid": { "control": "ui-float-label" } });
            this.setClass(this.layout[this.model.id], ['grid', 'control'], 'ui-float-label');
            console.log(this.layout);
        })
    }

    private setClass(layout: any, path: Array<string>, prop: string) {
        // const first = path && path.length > 0 && path.splice(0, 1)[0];
        // if (first && layout[first]) {
        //     layout[first] = layout[first];
        // } else {
        //     layout[first] = { first: {} };
        //     this.setClass(layout, path, prop);
        // }
    }

    constructor(protected layoutService: DynamicFormLayoutService,
        protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }
}