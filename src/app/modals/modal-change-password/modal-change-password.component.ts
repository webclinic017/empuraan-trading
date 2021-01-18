import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
	selector: "app-modal-change-password",
	templateUrl: "./modal-change-password.component.html",
	styleUrls: ["./modal-change-password.component.scss"],
})
export class ModalChangePasswordComponent implements OnInit {
	passwordsDontMatch: boolean;
  user: User;
  spinner: boolean
	constructor(private modalCtrl: ModalController, private userService: UserService, private toastCtrl: ToastController) {}

	ngOnInit() {
    this.spinner = false
		this.userService.authenticated.subscribe((u) => (this.user = u.user));
	}

	dismissModal() {
		this.modalCtrl.dismiss();
	}

	changePassword(input) {
    this.spinner = true
    if(input.newPassword != "" || input.confirmPassword != ""){
      if (input.newPassword == input.confirmPassword) {
        this.userService.changePassword(this.user.email, input.newPassword).subscribe(
          () => {},
          (err) => {
            this.spinner = false
            console.log(err)
            this.presentErrorToast(err)
          }, 
          () => {
            this.spinner = false
            this.presentSuccessToast('Password changed successfuly.')
            this.dismissModal()
          }
        );
      } else {
        this.spinner = false
        this.presentErrorToast('New passwords don\'t match.')
      }
    } else {
      this.spinner = false
      this.presentErrorToast('Something is missing.')
    }
	}

	async presentErrorToast(message) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2500,
			color: "danger",
		});
		await toast.present();
  }
  
	async presentSuccessToast(message) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2500,
			color: "success",
		});
		await toast.present();
  }
}
