import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from "../shared/index";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";

@Component({
    selector: 'session-list',
    templateUrl: `/app/events/event-details/session-list.component.html`
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    visibleSessions: ISession[] = []
    @Input() sortBy: string
    @Input() eventId: number

    constructor(private auth: AuthService, private voterService: VoterService){

    }

    ngOnChanges() {
         if(this.sessions){
             this.filterSessions(this.filterBy)
             this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this .visibleSessions.sort(sortByVotesDesc)
             }
         }  
    
    toggleVote(session: ISession){
        if(this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName)
        } else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
        }

        if(this.sortBy === 'votes')
            this.visibleSessions.sort(sortByVotesDesc)
    }

    userHasVoted(session: ISession){
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }

    filterSessions(filter){
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0) //creates duplicate array of the same values. so will not change the original
        } else {
            this.visibleSessions = this.sessions.filter(session => { return session.level.toLocaleLowerCase() === filter}) //new array with filterd values
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession){
    if(s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length
}