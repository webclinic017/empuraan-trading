import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Input } from "hammerjs";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
	selector: "app-sign-up",
	templateUrl: "./sign-up.page.html",
	styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
	signupSpinner: boolean;

	constructor(private router: Router, private userService: UserService, private toastCtrl: ToastController) {}

	ngOnInit() {
		this.signupSpinner = false;
		this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
	}

	signUp(form: NgForm) {
		this.signupSpinner = true;
		if (form.valid) {
			if (this.checkIfPasswordsMatch(form.value.password, form.value.confirmPassword)) {
				delete form.value.confirmPassword;
				this.userService.signUp(form.value).subscribe(
					(res: any) => {},
					(err) => {
            this.signupSpinner = false;
            err.error.debug == 'ERR_USER_ALREADY_EXISTS' && this.presentErrorToast('Email is already in use.');
					},
					() => {
						this.signupSpinner = false;
						form.resetForm();
						this.router.navigate(["home", "login"]);
						this.userService.checkIfIsOnLoginOrSignUpPage("/home/login");
					}
				);
			} else {
				this.signupSpinner = false;
				this.presentErrorToast("Passwords dont match.");
			}
		} else {
      this.signupSpinner = false;
      this.presentErrorToast("Something is missing.");
    }
	}

	// generateUser(res) {
	// 	let user: User = {
	// 		email: res.user.email,
	// 		username: res.user.username,
	// 		balance: {
	// 			availableBal: 0,
	// 			openBal: 0,
	// 		},
	// 	};
	// 	this.userService.accountDetails().subscribe(
	// 		(res: any) => {
	// 			user.balance.availableBal = res.account.initialValue;
	// 			user.balance.openBal = parseFloat(res.account.currentBalance);
	// 			user.balance.currency = res.account.currency;
	// 		},
	// 		() => {},
	// 		() => this.userService.user.next(user)
	// 	);
	// }

	checkIfPasswordsMatch(password, confirmPassword) {
		if (password === confirmPassword) return true;
		else return false;
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
