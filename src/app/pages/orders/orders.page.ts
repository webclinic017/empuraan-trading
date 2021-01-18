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
	position: OrderMin[];
	completed: OrderMin[];
	pending: OrderMin[];
	filteredPosition: OrderMin[];
	filteredCompleted: OrderMin[];
	filteredPending: OrderMin[];
	dataLoaded: boolean;
	totalPandL: number;
	pageIndex: number;
	subscribedPositionSockets: Subscription[] = [];
	subscribedPendingSockets: Subscription[] = [];
	constructor(private orderService: OrderService, private modalCtrl: ModalController, private actionSheetController: ActionSheetController, private stockService: StockService) {}

	ngOnInit() {
		this.pageIndex = 0;
	}

	ionViewDidEnter() {
		this.dataLoaded = false;
		this.getOrders();
	}

	getOrders() {
		this.pending = [];
		this.position = [];
		this.completed = [];
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
					this.position.unshift(Object.assign({}, order));
				} else if (o.status == "completed" && o.transactionTwo.stoplossStatus == "notFilled" && o.transactionTwo.targetStatus == "notFilled") {
					const o = Object.assign({}, order);
					o["status"] = "completed";
					o.orderCategory = order.orderCategory == "buy" ? "sell" : "buy";
					this.completed.unshift(o);
				}
			});
			this.updateLtp();
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
					this.completed.unshift(o);
					break;
				case "pending":
					if (orderCategory != null) o.orderCategory = orderCategory == "buy" ? "sell" : "buy";
					else o.orderCategory = order.orderCategory;
					key != null ? (o.key = key) : (o.key = "price");
					key == 'target' ? o.target = order.target : o.stoploss = order.stoploss
					this.pending.unshift(o);
					break;
				case "notFilled":
					if (orderCategory != null) o.orderCategory = orderCategory == "buy" ? "sell" : "buy";
					else o.orderCategory = order.orderCategory;
					o.price = price;
					o["status"] = "cancelled";
					this.completed.unshift(o);
					break;
				default:
					break;
			}
		}
	}

	updateLtp() {
		this.unsubscribeFromSockets();
		this.position.forEach((s: any, i) => {
			let stockSub: Subscription = this.stockService.listen(`${s.stockId}-${s.watchlistId}`).subscribe((res: any) => {
				s.ltp = res[0].price;
				if (i == this.pending.length - 1) this.dataLoaded = true;
			});
			this.subscribedPositionSockets.unshift(stockSub);
		});
		this.pending.forEach((s: any, i) => {
			let stockSub: Subscription = this.stockService.listen(`${s.stockId}-${s.watchlistId}`).subscribe((res: any) => {
				s.ltp = res[0].price;
				if (i == this.pending.length - 1) this.dataLoaded = true;
			});
			this.subscribedPendingSockets.unshift(stockSub);
		});
		if ((this.position.length == 0 && this.pending.length == 0 && this.completed.length == 0) || this.completed.length > 0) this.dataLoaded = true;
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
			if (d.data == true) this.getOrders();
		});
		return await modal.present();
	}

	async openModalEditOrderPending(pending) {
		const modal = await this.modalCtrl.create({
			component: ModalEditOrderComponent,
			componentProps: { pending },
		});
		modal.onDidDismiss().then((d) => {
			if (d.data == true) this.getOrders();
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
		this.updateLtp();
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
