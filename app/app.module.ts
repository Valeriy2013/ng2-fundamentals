import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver,
    CreateSessionComponent,
    SessionListComponent
} from './events/index'
import { EventsAppComponent } from './events-app.component'
//import { EventsListComponent } from './events/events-list.component'
//import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
//import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { CollapsibleWellComponent } from './common/collapsible-well.component'
//import { EventDetailsComponent } from './events/event-details/event-details.component'
//import { CreateEventComponent } from './events/create-event.component'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { EventRouteActivator } from './events/event-details/event-route-activator.service'
//import { EventsListResolver } from './events/events-list-resolver.service'


@NgModule({
    imports: [ BrowserModule, 
               FormsModule,
               ReactiveFormsModule,
               RouterModule.forRoot(appRoutes)
             ],
    declarations: [ EventsAppComponent, 
                    EventsListComponent, 
                    EventThumbnailComponent, 
                    NavBarComponent, 
                    EventDetailsComponent,
                    CreateEventComponent,
                    CreateSessionComponent,
                    SessionListComponent,
                    Error404Component,
                    CollapsibleWellComponent],
    providers: [ EventService, 
                 ToastrService,
                 EventRouteActivator,
                 {
                     provide: 'canDeactivateCreateEvent',
                     useValue: checkDirtyState
                 },
                 EventsListResolver,
                 AuthService],
    bootstrap: [EventsAppComponent]
})
export class AppModule{
}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}