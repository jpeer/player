import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SearchService} from "../../providers/search-service";
import {HomePage} from "../home/home";

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    private searchResults: any[] = [];
    private searchQuery: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, private searchService: SearchService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SearchPage');
    }

    searchByKeyword(event: any) {

        console.log('searchByKeyword: ', JSON.stringify(event));
        console.log('searchQuery: ', this.searchQuery);

        if(this.searchQuery.trim().length == 0) {
            return;
        }

        this.searchService.findPodcasts(this.searchQuery.trim()).subscribe(data => {
            this.searchResults = data;
        });
    }

    openHomePage(item) {
        this.navCtrl.push(HomePage, { podcast: item });
    }
}
