import { Title } from "@angular/platform-browser";
import { MovieModel } from "./movie.model"

export interface CartModel {
    id: number
    userEmail: string
    movies: { id: number; movieId: string; movieTitle: string; count: number, pricePerItem: number, status: 'ordered' | 'paid' | 'canceled' | 'watched', rating: boolean | null}[]
    totalPrice: number
}