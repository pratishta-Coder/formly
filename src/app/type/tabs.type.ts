import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-tabs',
     template: 
     `<mat-tab-group> 
        <mat-tab *ngFor="let tab of field.fieldGroup; let i = index; let last = last" [label]="getLabel(tab)" > 
            <formly-field [field]="tab"></formly-field>
                <button *ngIf="last" class="btn btn-primary" [disabled]="!form.valid" type="submit">Submit</button>
        </mat-tab>
    </mat-tab-group>`,
})

export class FormlyFieldTabs extends FieldType {
    getLabel(tab: any): string{
        return tab.props?.label || 'Default';
    }
    // isValid(field: FormlyFieldConfig): boolean {
    //     if (field.key) {
    //         return field.formControl.valid;
    //     }
    //     return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
    // }
}