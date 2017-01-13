import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SearchService} from "../../providers/search-service";
import {HomePage} from "../home/home";
import {DataService} from "../../providers/data-service";

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    private searchResults: any[] = [];
    private searchQuery: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, private searchService: SearchService, private dataService: DataService) {
    }

    searchByKeyword(event: any) {

        if (this.searchQuery.trim().length == 0) {
            return;
        }

        this.searchService.findPodcasts(this.searchQuery.trim()).subscribe(data => {
            this.searchResults = data;
        });
    }

    openHomePage(item) {
        console.log('opening now: ', JSON.stringify(item));
        this.dataService.addPodcastMetaData(item);
        this.navCtrl.push(HomePage, {podcast: item});
    }
}
