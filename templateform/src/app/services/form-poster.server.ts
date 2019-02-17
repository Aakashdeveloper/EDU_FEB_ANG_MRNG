import { Injectable} from '@angular/core';
import { Employee} from '../models/employee.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {

    private url = 'http://localhost:3100/postEmployee';

    constructor(private _http: HttpClient) {
    }

    postEmployee(employee: Employee) {
        console.log('getting in service', employee);
        return this._http.post(this.url , employee);
    }

}
