import { Component, EventEmitter, Input, Output, QueryList, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
    DynamicFormControlComponent,
    DynamicFormControlCustomEvent,
    DynamicFormGroupModel,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicTemplateDirective
} from "@ng-dynamic-forms/core";

@Component({
    selector: "custom-dynamic-primeng-form-group",
    templateUrl: "./custom-dynamic-primeng-form-group.component.html"
})
export class CustomDynamicPrimeNGFormGroupComponent extends DynamicFormControlComponent implements OnInit {
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicFormGroupModel;
    @Input() templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }

    ngOnInit(): void {
        console.log(this.model);
    }
}