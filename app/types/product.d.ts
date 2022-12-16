export default interface ProductType {
    tickets: number
    total_tickets: number
    expires_at: Date
    name: string
    price: number
    photo: string
    free_ticket?: boolean
}