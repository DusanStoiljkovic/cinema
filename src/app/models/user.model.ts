import { MovieModel } from "./movie.model";
import { OrderModel } from "./order.model";

export interface UserModel {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    favouriteMovies: string[],
    orders: OrderModel[]
}