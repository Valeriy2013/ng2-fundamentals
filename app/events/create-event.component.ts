import { Component } from "@angular/core";
import { Router } from "@angular/router";

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
export class CreateEventComponent{
    isDirty:boolean = true
    constructor(private route: Router){
        
    }

    saveEvent(formValues) {
        console.log(formValues)
    }

    cancel(){
        this.route.navigate(['/events'])
    }
}