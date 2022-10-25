export default interface TicketType {
    num: string
    status: 'pending' | 'won' | 'incoming' | 'claimed'
    expiry: Date | null
    draw: Date
    target: number
}