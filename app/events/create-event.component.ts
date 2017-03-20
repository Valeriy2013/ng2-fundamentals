import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/index";

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
      em { float: rigth; color: #E05C65; padding-left: 10px; }
      .error input { background-color:#E3C3C5; }
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color: #999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent {
        
    isDirty:boolean = true
    event:any

    constructor(private route: Router, private eventService: EventService){
        
    }

    /*ngOnInit() {
        this.event = {
            id: 1,
            name: 'New Event',
            date: new Date('9/12/2036'),
            time: '10:00 am',
            price: 55.99,
            imageUrl: '/app/assets/images/angularconnect-shield.png',
            location: {
                address: '43 DT',
                city: 'MyCity',
                country: 'MyCountry'
            },
        }    
    }*/

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.route.navigate(['/events'])
    }

    cancel(){
        this.route.navigate(['/events'])
    }
}