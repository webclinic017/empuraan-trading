import { Balance } from './balance.model';

export interface User {
    id: number
    firstname: string
    lastname: string
    imgUrl?: string
    email: string
    password: string
    balance: Balance
}
