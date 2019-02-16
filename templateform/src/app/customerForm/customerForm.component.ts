import { Component } from '@angular/core';
import {Employee} from '../models/employee.model';
import { NgForm} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})

export class CustomerFormComponent {

    languages: any[] = ['GoLang', 'Python ', 'Node'];
    customModel = new Employee('John', 'Andy', 'a@a.com', '1234', 'male', true, 'GoLang');
    hasCodeLangError: Boolean = false;
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
        console.log(form.value);
    }
}
