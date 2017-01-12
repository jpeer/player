import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {URLSearchParams, Jsonp, Response} from '@angular/http';

@Injectable()
export class SearchService {

    static readonly URL_STUB = 'https://itunes.apple.com/search';

    constructor(private jsonp: Jsonp) {
    }

    extractData(res: Response): any[] {

        console.log(res.json());

        let data = res.json().results;
        return data.map(elem => {
            return {title: elem['collectionName'], feed: elem['feedUrl']};
        });

    }

    findPodcasts(searchTerm: string): Observable<any[]> {

        let params = new URLSearchParams('entity=podcast&media=podcast&callback=JSONP_CALLBACK');
        params.set('term', searchTerm);

        return this.jsonp.get(SearchService.URL_STUB, {search: params})
            .map(this.extractData);
    }

}