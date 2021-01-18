export interface OrderMin {
    id: string
    stockId: string
    orderCategory: string
    name: string
    price: number
    isDeleted: boolean
    watchlistId: string
    createdDate: string
    quantity: number
    ltp?: number
    status?: string
    stoploss?: number
    target?: number
    key?: number
}
