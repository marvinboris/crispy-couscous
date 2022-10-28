export default interface PrizeType {
    ticket_num: string
    date: Date
    type: 'voucher' | 'product'
    claimed_at: Date | null
    price: string | number
}