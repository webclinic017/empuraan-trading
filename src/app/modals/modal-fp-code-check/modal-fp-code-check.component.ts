import { Component, OnInit, Input } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
import { ModalChangePasswordComponent } from "../modal-change-password/modal-change-password.component";

@Component({
	selector: "app-modal-fp-code-check",
	templateUrl: "./modal-fp-code-check.component.html",
	styleUrls: ["./modal-fp-code-check.component.scss"],
})
export class ModalFpCodeCheckComponent implements OnInit {
	@Input("email") email: string;
	code: string;
	spinner: boolean;

	constructor(private modalCtrl: ModalController, private userService: UserService, private toastCtrl: ToastController) {}

	ngOnInit() {
		this.spinner = false;
		this.code = "";
	}

	dismissModal() {
		this.modalCtrl.dismiss();
	}

	codeCheck(email, code) {
		this.spinner = true;
		if (typeof code != "undefined" && code) {
			this.userService.checkCodeValid(email, code).subscribe(
				(r) => {
					this.openChangePasswordModal(email);
					this.dismissModal();
					this.spinner = false;
				},
				() => {
					this.presentErrorToast("Code is incorrect.");
					this.spinner = false;
				}
			);
		} else {
			this.presentErrorToast("Enter the code you've received.");
			this.spinner = false;
		}
	}

	async openChangePasswordModal(email) {
		const modal = await this.modalCtrl.create({
      component: ModalChangePasswordComponent,
      componentProps: {email}
		});
		return await modal.present();
	}

	async presentErrorToast(message) {
		const modal = await this.toastCtrl.create({
			message,
			color: "danger",
			duration: 2500,
		});

		await modal.present();
	}
}
