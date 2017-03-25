import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    CreateEventComponent,
    EventDetailsComponent,
    EventsListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    VoterService,
    UpvoteComponent,
    LocationValidator,
    EventResolver
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { JQ_TOKEN, 
    TOASTR_TOKEN, 
    Toastr, 
    CollapsibleWellComponent, 
    SimpleModalComponent,
    ModalTriggerDirective } from './common/index'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from "./user/auth.service"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

declare let toastr : Toastr
declare let jQuery : Object

@NgModule({
    imports: [ BrowserModule, 
               FormsModule,
               HttpModule,
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
                    CollapsibleWellComponent,
                    DurationPipe,
                    SimpleModalComponent,
                    ModalTriggerDirective,
                    UpvoteComponent,
                    LocationValidator],
    providers: [ 
                 EventService,                  
                 {
                     provide: 'canDeactivateCreateEvent',
                     useValue: checkDirtyState
                 },
                 EventsListResolver,
                 EventResolver,
                 AuthService,
                 {
                      provide: TOASTR_TOKEN, 
                      useValue: toastr
                 },
                 {
                      provide: JQ_TOKEN, 
                      useValue: jQuery
                 },
                 VoterService
                 ],
    bootstrap: [EventsAppComponent]
})
export class AppModule{
}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}