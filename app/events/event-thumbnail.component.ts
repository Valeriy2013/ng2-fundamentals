import { Component, Input } from '@angular/core'
import { IEvent } from './index';

@Component({
    selector: `event-thumbnail`,
    template: `
        <div [routerLink] = "['/events', event.id]" class = "well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}}</h2>
            <div>Date: {{event?.date | date: 'shortDate'}}</div>
            <div [ngClass] = "getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>
            <div>Price: {{event.price | currency:'USD':true}}</div>
            <div *ngIf = "event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf = "event?.onlineUrl">
                OnlineUrl: {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .well div { color: #bbb; }
        .pad-left { margin-left: 10px; }
        .thumbnail { min-height: 210px; }
    `]
})
export class EventThumbnailComponent{
   @Input() event: IEvent;
   getStartTimeClass(){        
        return { green: this.event.time === '8:00 am', bold: this.event.time === '8:00 am' }
   }
}
