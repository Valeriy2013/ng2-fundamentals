import { Component, Input } from '@angular/core'

@Component({
    selector: `event-thumbnail`,
    template: `
        <div class = "well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
        </div>
    `,
    styles: [`
        .well div { color: #bbb; }
        .pad-left { margin-left: 10px; }
        .thumbnail { min-height: 210px; }
    `]
})
export class EventThumbnailComponent{
   @Input() event: any;

}
