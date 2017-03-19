import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
    currentUser: IUser
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: 'Sam',
            lastName: 'Jonson',
            userName: userName
        }
    }

    isAuthenticated(){
        return !!this.currentUser
    }
}