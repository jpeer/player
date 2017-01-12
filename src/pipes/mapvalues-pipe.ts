import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'mapValues'})
export class MapValuesPipe implements PipeTransform {

    transform(value, args:string[]) : any {
        let returnArray = [];

        value.forEach((entryVal, entryKey) => {
            returnArray.push({
                key: entryKey,
                val: entryVal
            });
        });

        return returnArray;
    }
}