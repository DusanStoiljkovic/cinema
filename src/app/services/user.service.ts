import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { OrderModel } from '../models/order.model';

@Injectable({
    providedIn: 'root',
})

export class UserService {

    public static retrieveUsers(): UserModel[] {
    
        if(!localStorage.getItem('users')) {
           const arr = [{
            firstName: 'Dusan',
            lastName: 'Stoiljkovic',
            email: 'dusan@gmail.com',
            password: '123',
            phone: '0611223344',
            address: 'Milunke Savic 11',
            favouriteMovies: ['1', '2', '3'],
            cart: []
           }]
           
           localStorage.setItem('users', JSON.stringify(arr))
        }

        return JSON.parse(localStorage.getItem('users')!)
    }

    public static doLogin(email: string, password: string): boolean {
        for(let elem of this.retrieveUsers()) {
            if(elem.email == email && elem.password == password) {
                localStorage.setItem('active', email)
                return true
            }
        }
        return false
    }

    public static doSignUp(user: UserModel): boolean {
        if(Object.values(user).some(value => value === ''))
            return false

        let arr = this.retrieveUsers()
        arr.push(user)
            localStorage.setItem('users', JSON.stringify(arr))
                return true 
    }

    public static getActiveUsers() {
        const arr = this.retrieveUsers()
        const active = localStorage.getItem('active')
        if(!active) 
            return null

        return arr.find(user => user.email === active) || null
    }

    public static createOrder(order: OrderModel) {
        const allUsers = this.retrieveUsers()
        for(let user of allUsers) {
            if(user.email == localStorage.getItem('active')){
                user.orders.push(order)
                localStorage.setItem('users', JSON.stringify(allUsers))
                return true
            }
        }
        return false
    }

    public static changePassword(newPassword: string): boolean {
        const allUsers = this.retrieveUsers()
        for(let user of allUsers) {
            if(user.email == localStorage.getItem('active')) {
                user.password = newPassword
                localStorage.setItem('users', JSON.stringify(allUsers))
                return true
            }
        }
        return false
    } 

}