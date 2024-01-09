import {User} from "../db/User.js"

export class UserConnectedState {
    constructor() {
        this.isConnected = true
        this.User = new User()
    }

    getUser() {
        return new User()
    }
}

export class AnonymousUserState {
    constructor() {
        this.isConnected = false
        this.User = new User()
    }

    getUser() {
        return new User()
    }
}