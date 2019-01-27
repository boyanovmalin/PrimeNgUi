import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, OnInit } from "@angular/core";
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
export class CustomDynamicPrimeNGInputComponent extends DynamicFormControlComponent implements OnInit {
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicInputModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("pInputText") pInputText: InputText;

    constructor(protected layoutService: DynamicFormLayoutService,
        protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }

    ngOnInit(): void {

    }
}