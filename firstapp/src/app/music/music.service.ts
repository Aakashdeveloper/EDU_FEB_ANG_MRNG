import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { IMusic } from './music.model';

@Injectable()

export class MusicService {
    constructor(private _http: HttpClient) {}

    private _musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

    getMusic(): Observable<IMusic[]> {
        return this._http.get<IMusic[]>(this._musicUrl);
    }
}
