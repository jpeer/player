import {Component} from '@angular/core';

import {
    LoadingController,
    NavController,
    AlertController
} from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LoginServiceProvider} from "../../providers/login-service/login-service";
import {PasswordAuthProvider} from "../../providers/password-auth/password-auth";
import {TabsPage} from "../tabs/tabs";
import {RegisterPage} from "../register/register";


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public loginForm: FormGroup;

    constructor(public navCtrl: NavController,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                public loginServiceProvider: LoginServiceProvider,
                public passwordAuthProvider: PasswordAuthProvider,
                public formBuilder: FormBuilder) {

        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6),
                Validators.required])]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    loginUser() {
        console.log('loginUser was called!');
        if (!this.loginForm.valid){
            console.log(this.loginForm.value);
            return;
        }

        this.passwordAuthProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(
                    (authData) => {
                        console.log('great, got back some authdata', JSON.stringify(authData));
                        this.loginServiceProvider.setLoggedIn(authData.uid).then(() =>
                            this.navCtrl.setRoot(TabsPage));
                    },
                    (err) => {
                        console.log('not so greate, got back some error', err);
                    }
                );
    }

    goToSignup() {
        console.log('goToSignup was called!');
        this.navCtrl.push(RegisterPage);
    }

    goToResetPassword() {
        console.log('goToResetPassword was called!');
    }
}
