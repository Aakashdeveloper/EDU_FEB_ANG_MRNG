import { Component } from '@angular/core';
import {Employee} from '../models/employee.model';
import { NgForm} from '@angular/forms';

import { FormPosterService } from '../services/form-poster.server';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})

export class CustomerFormComponent {

    languages: any[] = ['GoLang', 'Python ', 'Node'];
    customModel = new Employee('John', 'Andy', 'a@a.com', '1234', 'male', true, 'GoLang');
    hasCodeLangError: Boolean = false;

    constructor(private _formPost: FormPosterService) {}

    FirstToUpper(value: string): void {
        if (value.length > 0) {
            this.customModel.FirstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.customModel.FirstName = value;
        }
    }

    validateCodeLang(event): void {
        if (this.customModel.codelang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    submitForm(form: NgForm): void {
       this._formPost.postEmployee(form.value)
            .subscribe((res) => console.log('post success'));
    }
}
