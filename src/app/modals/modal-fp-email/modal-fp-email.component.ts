import { Component, OnInit, Input } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
import { ModalFpCodeCheckComponent } from "../modal-fp-code-check/modal-fp-code-check.component";

@Component({
	selector: "app-modal-fp-email",
	templateUrl: "./modal-fp-email.component.html",
	styleUrls: ["./modal-fp-email.component.scss"],
})
export class ModalFpEmailComponent implements OnInit {
  email: string;
  spinner: boolean

  constructor(private modalCtrl: ModalController, 
    private userService: UserService,
    private toastCtrl: ToastController) {}

	ngOnInit() {
    this.spinner = false
  }

	dismissModal() {
		this.modalCtrl.dismiss();
	}

	emailCheck(email) {
    this.spinner = true
    if(email != ''){
      if (this.checkIfEmailInString(email)) {
        this.userService.emailExists(this.email).subscribe((r) => {
          this.spinner = false
          this.dismissModal();
          this.openCodeCheckModal(email);
        }, () =>{
			this.spinner = false
			this.presentErrorToast('Email does not exist.')
		});
      } else {
        this.spinner = false
        this.presentErrorToast('Enter your email in the correct format.')
      }
    } else {
      this.spinner = false
      this.presentErrorToast('Enter your email.')
    }
	}

	async openCodeCheckModal(email) {
		const modal = await this.modalCtrl.create({
			component: ModalFpCodeCheckComponent,
			componentProps: { email },
		});
		return await modal.present();
	}

	checkIfEmailInString(text) {
		var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
		return re.test(text);
	}

	async presentErrorToast(message) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2500,
			color: "danger",
		});
		await toast.present();
	}
}
