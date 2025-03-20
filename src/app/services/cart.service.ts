import { Injectable } from "@angular/core";
import { CartModel } from "../models/cart.model";
import { JsonPipe } from "@angular/common";
import { OrderModel } from "../models/order.model";

@Injectable ({
    providedIn: 'root'
})

export class CartService {
    public static isLocalStorageAvailable(): boolean {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined'
    }

    public static getCart(): CartModel {
        if(!localStorage.getItem('cart')) {
            let cart: CartModel = {
                id: 0,
                movies: [],
                userEmail: "",
                totalPrice: 0.00
            }
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        return JSON.parse(localStorage.getItem('cart')!)
    }

    public static addInCart(order: OrderModel, cartId: number) {
        let cart = this.getCart()
        cart!.movies.push({id: Date.now() ,movieId: order.movieId, movieTitle: order.movieTitle, count: order.count, pricePerItem: order.pricePerItem, status: 'ordered', rating: null})
        this.updateCart(cart)
    }

    public static updateCart(cart: CartModel | null) {
        if(cart) {
            cart.totalPrice = cart.movies.filter(obj => obj.status === 'ordered').reduce((acc, curr) => acc + curr.count * 499, 0)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }
}