import { Balance } from './balance.model';

export interface User {
    id: number
    username: string
    imgUrl?: string
    email: string
    balance: Balance
}
