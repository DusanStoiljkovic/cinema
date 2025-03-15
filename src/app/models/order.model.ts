export interface OrderModel {
    id: number
    movieId: number
    movieTitle: string
    count: number
    pricePerItem: number
    status: 'ordered' | 'paid' | 'watched'
    rating: null | boolean
}