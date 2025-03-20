export interface OrderModel {
    userEmail: string
    movieId: string
    movieTitle: string
    count: number
    pricePerItem: number
    status: 'ordered' | 'paid' | 'watched'
    rating: null | boolean
}