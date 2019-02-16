import { Component, OnChanges, OnInit, OnDestroy,
        Input, Output, EventEmitter} from '@angular/core';

@Component({
    // Attribute
    // selector: '[app-star]',
    // Class
    // selector: '.app-star',
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit, OnDestroy {
    starWidth: number;

    // @Input('ratingVal') rating: number;
    @Input() rating: number;
    // @Output('rateClicked') ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onLoad(): void {
        console.log('object here');
    }

    constructor() {
        console.log('1>>construct');
    }

    ngOnChanges(): void {
        console.log(' 2>>in oninchanges');
        this.starWidth = this.rating * 86 / 6;
    }

    ngOnInit(): void {
        console.log('3>>in on init');
    }

    ngOnDestroy(): void {
        console.log(' in on destroy ');
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
}


/*
shared component
nesting the component
lifecycle hook
pass data from parent to child with input
pass data from child to parent with output


var a = 10
var b = "my age is "+a
var c = `my age is ${a}`
*/
