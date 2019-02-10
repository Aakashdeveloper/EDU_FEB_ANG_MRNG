import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

import { IMusic } from './music.model';

@Component({
    templateUrl: './music.component.html'
})

export class MusicComponent implements OnInit {

    all_music: IMusic[];
    music:  IMusic[];

    constructor(private _musicService: MusicService) { }

    ngOnInit(): void {
        this._musicService.getMusic().subscribe((data) => {
            this.all_music = data[0]['artists'];
        });
    }

    display(id): void {
        console.log('music', id);
    }
}
