export default interface TicketType {
    num: string
    status: 'pending' | 'won' | 'incoming'
    expiry: Date | null
    draw: Date
    target: number
}