import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { Completed } from '../models/completed.model';
import { Pending } from '../models/pending.model';
import { Position } from '../models/position.model';
import { WatchlistService } from './watchlist.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  position: Position[] = [
    {
      name: 'IOC',
      code: 'IOC',
      price: 78.1,
      quantity: 100,
      pAndL: 10.00,
      LTP: 78.0,
      SL: 77.5
    },
    {
      name: 'Reliance',
      code: 'Reliance',
      price: 2100,
      quantity: 100,
      pAndL: 100.00,
      LTP: 2101,
      SL: 2095
    },
    {
      name: 'SBIN',
      code: 'SBIN',
      price: 245,
      quantity: -100,
      pAndL: -90.00,
      LTP: 245.9,
      SL: 244.0
    },
  ]
  completed: Completed[] = [
    {
      name: 'IOC',
      code: 'IOC',
      price: 78.1,
      quantity: 100,
      status: 'CANCELLED',
      pAndL: -10.00,
      exitPrice: 78.0
    },
    {
      name: 'Reliance',
      code: 'Reliance',
      price: 2100,
      quantity: 100,
      status: 'COMPLETE',
      pAndL: 100.00,
      exitPrice: 2101
    },
    {
      name: 'SBIN',
      code: 'SBIN',
      price: 245,
      quantity: -100,
      status: 'COMPLETE',
      pAndL: -90.00,
      exitPrice: 245.9
    },
  ]
  pending: Pending[] = [
    {
      name: 'IOC',
      code: 'IOC',
      price: 78.1,
      quantity: 100,
      LTP: 78.5
    },
    {
      name: 'Reliance',
      code: 'Reliance',
      price: 2100,
      quantity: 100,
      LTP: 2101
    },
    {
      name: 'SBIN',
      code: 'SBIN',
      price: 245,
      quantity: -100,
      LTP: 245.9
    },
  ]
  constructor(private watchlistService: WatchlistService) { }

  totalPandL(){
    const pos = this.position.map(p => p.pAndL)
    const val = pos.reduce((p, c) => p + c)
    return val
  }

  buy(cId: string,quantity: number, stopLoss: number, target: number, order: string, price?: number){
    let company
    this.watchlistService.getCompany(cId).subscribe(c => company = c)
    var pending : Pending
    order == 'limit' 
    ? pending = {name: company.name, code: company.name, quantity, LTP: stopLoss, price}
    : pending = {name: company.name, code: company.name, quantity, LTP: stopLoss, price: 0}
    this.pending.unshift(pending)
  }

  savePosition(position: Position){
    var positionToUpdate = this.position.find(p => p.code == position.code)
    var indexOfPositionToUpdate = this.position.indexOf(positionToUpdate)
    this.position.splice(indexOfPositionToUpdate,1,position)
  }

  sellPosition(position: Position){
    var positionToUpdate = this.position.find(p => p.code == position.code)
    var indexOfPositionToUpdate = this.position.indexOf(positionToUpdate)
    this.position.splice(indexOfPositionToUpdate,1)
    const completed: Completed = {
      name: position.name, 
      code: position.code,  
      price: position.price, 
      quantity: -position.quantity,
      status: 'COMPLETE',
      pAndL: position.pAndL,
      exitPrice: position.price
    }
    this.completed.unshift(completed)
  }
  savePending(pending: Pending){
    var pendingToUpdate = this.pending.find(p => p.code == pending.code)
    var indexOfPendingToUpdate = this.pending.indexOf(pendingToUpdate)
    this.pending.splice(indexOfPendingToUpdate,1,pending)
  }
}
