
import axios from "axios"

export class UserController {

    constructor(){
        this.axios = axios.create({baseUrl: 'https://qauto.forstudy.space/api',
            validateStatus: () => true
        })
        this.API_USER_PROFILE = '/users/profile'
    }
async getUserProfile(){
    return this.axios.get(this.API_USER_PROFILE)
    }
}