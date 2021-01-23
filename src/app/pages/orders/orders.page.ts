import { Component, OnDestroy, OnInit } from "@angular/core";
import { OrderService } from "src/app/services/order.service";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { ModalEditOrderComponent } from "src/app/modals/modal-edit-order/modal-edit-order.component";
import { Order } from "src/app/models/order.model";
import { StockService } from "src/app/services/stock.service";
import { Subscription } from "rxjs";
import { OrderMin } from "src/app/models/order-min";

@Component({
	selector: "app-orders",
	templateUrl: "./orders.page.html",
	styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit, OnDestroy {
	position: OrderMin[] = [];
	completed: OrderMin[] = [];
	pending: OrderMin[] = [];
	tempPosition: OrderMin[] = [];
	tempCompleted: OrderMin[] = [];
	tempPending: OrderMin[] = [];
	filteredPosition: OrderMin[];
	filteredCompleted: OrderMin[];
	filteredPending: OrderMin[];
	dataLoaded: boolean;
	totalPandL: number;
	pageIndex: number;
	subscribedPositionSockets: Subscription[] = [];
	subscribedPendingSockets: Subscription[] = [];
	spinner: boolean
	constructor(private orderService: OrderService, private modalCtrl: ModalController, private actionSheetController: ActionSheetController, private stockService: StockService) {}

	ngOnInit() {
		this.pageIndex = 0;
		this.dataLoaded = false;
	}

	ionViewDidEnter() {
		this.spinner = true
		this.getOrders();
	}

	getOrders(spinner?: boolean) {
		this.tempPending = [];
		this.tempPosition = [];
		this.tempCompleted = [];
		if(spinner == true) this.spinner = true;
		this.orderService.getAllUserOrders().subscribe((res: any) => {
			res.data.forEach((o: Order) => {
				const order: OrderMin = {
					id: o._id,
					stockId: o.stockId,
					orderCategory: o.orderCategory,
					watchlistId: o.watchlistId,
					name: o.companyName,
					price: o.price,
			        quantity: o.volume,
					isDeleted: o.isDeleted,
					stoploss: o.stoploss,
					target: o.target,
					createdDate: o.created_date
				};
				this.orderPlacement(o.transactionOne.status, order, o.transactionOne.price);
				this.orderPlacement(o.transactionTwo.stoplossStatus, order, o.stoploss, "stoploss", o.orderCategory);
				this.orderPlacement(o.transactionTwo.targetStatus, order, o.target, "target", o.orderCategory);
				if (o.status == "positioned" && o.transactionOne.status == "completed") {
					order.stoploss = o.stoploss;
					order.target = o.target;
					this.tempPosition.unshift(Object.assign({}, order));
				} else if (o.status == "completed" && o.transactionTwo.stoplossStatus == "notFilled" && o.transactionTwo.targetStatus == "notFilled") {
					const o = Object.assign({}, order);
					o["status"] = "completed";
					o.orderCategory = order.orderCategory == "buy" ? "sell" : "buy";
					this.tempCompleted.unshift(o);
				}
			});
			this.updateLtp().finally(()=>{
				this.pending = this.tempPending;
				this.position = this.tempPosition;
				this.completed = this.tempCompleted;
				this.dataLoaded = true
				this.spinner = false
			});;
			// this.totalPandL = this.orderService.totalPandL()
		});
	}
	orderPlacement(status, order, price, key?, orderCategory?) {
		price = "price";
		const date = new Date(order.createdDate).getDay()
		const today = new Date().getDay()
		const o = Object.assign({}, order)
		if (today > date) {
			switch (status) {
				case "completed":
					if (orderCategory != null) o.orderCategory = orderCategory == "buy" ? "sell" : "buy";
					else o.orderCategory = order.orderCategory;
					o.price = order.price;
					o["status"] = status;
					this.tempCompleted.unshift(o);
					break;
				case "pending":
					if (orderCategory != null) o.orderCategory = orderCategory == "buy" ? "sell" : "buy";
					else o.orderCategory = order.orderCategory;
					key != null ? (o.key = key) : (o.key = "price");
					key == 'target' ? o.target = order.target : o.stoploss = order.stoploss
					this.tempPending.unshift(o);
					break;
				case "notFilled":
					if (orderCategory != null) o.orderCategory = orderCategory == "buy" ? "sell" : "buy";
					else o.orderCategory = order.orderCategory;
					o.price = price;
					o["status"] = "cancelled";
					this.tempCompleted.unshift(o);
					break;
				default:
					break;
			}
		}
	}

	async updateLtp() {
		this.unsubscribeFromSockets();
		this.tempPosition.forEach((s: any, i) => {
			let stockSub: Subscription = this.stockService.listen(`${s.stockId}-${s.watchlistId}`).subscribe((res: any) => {
				s.ltp = res[0].price;
			});
			this.subscribedPositionSockets.unshift(stockSub);
		});
		this.tempPending.forEach((s: any, i) => {
			let stockSub: Subscription = this.stockService.listen(`${s.stockId}-${s.watchlistId}`).subscribe((res: any) => {
				s.ltp = res[0].price;
			});
			this.subscribedPendingSockets.unshift(stockSub);
		});
	}

	async ordersActionSheet(order) {
		const actionSheet = await this.actionSheetController.create({
			header: "Order control panel",
			buttons: [
				{
					text: "Manage",
					icon: "cog",
					handler: () => {
						if (this.pageIndex == 0) this.openModalEditOrderPosition(order);
						else if (this.pageIndex == 2) this.openModalEditOrderPending(order);
					},
				},
				{
					text: "Cancel",
					icon: "close",
					role: "cancel",
				},
			],
		});
		await actionSheet.present();
	}

	async openModalEditOrderPosition(position) {
		const modal = await this.modalCtrl.create({
			component: ModalEditOrderComponent,
			componentProps: { position },
		});
		modal.onDidDismiss().then((d) => {
			if (d.data == true) this.getOrders(true);
		});
		return await modal.present();
	}

	async openModalEditOrderPending(pending) {
		const modal = await this.modalCtrl.create({
			component: ModalEditOrderComponent,
			componentProps: { pending },
		});
		modal.onDidDismiss().then((d) => {
			if (d.data == true) this.getOrders(true);
		});
		return await modal.present();
	}

	unsubscribeFromSockets() {
		this.subscribedPendingSockets.forEach((s) => {
			s.unsubscribe();
		});
		this.subscribedPendingSockets.splice(0, this.subscribedPendingSockets.length);
		this.subscribedPositionSockets.forEach((s) => {
			s.unsubscribe();
		});
		this.subscribedPositionSockets.splice(0, this.subscribedPositionSockets.length);
	}

	tabIndex(tab) {
		if (typeof tab == "number") this.pageIndex = tab;
		else this.pageIndex = tab.detail.index;
		this.updateLtp().finally(()=>{
			this.pending = this.tempPending;
			this.position = this.tempPosition;
			this.completed = this.tempCompleted;
			this.dataLoaded = true
			this.spinner = false
		});;
	}

	filterPosition(e) {
		this.filteredPosition = this.position.filter((p) => p.name.toLowerCase().includes(e.detail.value.toLowerCase()));
	}

	filterCompleted(e) {
		this.filteredCompleted = this.completed.filter((p) => p.name.toLowerCase().includes(e.detail.value.toLowerCase()));
	}

	filterPending(e) {
		this.filteredPending = this.pending.filter((p) => p.name.toLowerCase().includes(e.detail.value.toLowerCase()));
	}

	ionViewDidLeave() {
		this.unsubscribeFromSockets();
	}

	ngOnDestroy() {
		this.unsubscribeFromSockets();
	}
}
