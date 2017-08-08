import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage} from "@ionic/storage";

@Injectable()
export class LoginServiceProvider {

  constructor(public storage: Storage) {
    console.log('Hello LoginServiceProvider Provider');
  }

  isLoggedIn() : Promise<boolean> {
    return this.storage.get('userdata')
        .then((val) => val != undefined);
  }

  setLoggedIn(userInfo : any) :  Promise<any> {
    return this.storage.set('userdate', userInfo);
  }

}
