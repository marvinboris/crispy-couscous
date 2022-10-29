export default interface TicketType {
    num: string
    status: 'pending' | 'won' | 'incoming' | 'claimed' | 'failed'
    expiry: Date | null
    draw: Date
    target: number
    type?: 'voucher' | 'product'
    price?: string | number
}