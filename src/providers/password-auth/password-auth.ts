import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';


@Injectable()
export class PasswordAuthProvider {

    constructor(public http: Http) {
        console.log('Hello PasswordAuthProvider Provider');
    }

    loginUser(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    signupUser(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( newUser => {
                firebase.database().ref('/userProfile').child(newUser.uid)
                    .set({ email: email });
                return Promise.resolve(newUser);
            });
    }

    resetPassword(email: string): firebase.Promise<void> {
        return firebase.auth().sendPasswordResetEmail(email);
    }

    logoutUser(): firebase.Promise<void> {
        return firebase.auth().signOut();
    }


}
