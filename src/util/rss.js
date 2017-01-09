var request = require('request'),
    xml2js = require('xml2js');


var getFeed = function(url) {

    //console.log('trying to download from: ', url);

    var parser = new xml2js.Parser();
/*

 export interface ITrackConstraint {
 id?:number;
 src: string;
 title?: string;
 artist?: string;
 art?: string;
 preload?: string;
 }
 */
    return new Promise(function(resolve, reject) {

        request(url, function (err, res, body) {

            if(err) { reject(Error("http download failed")); }

            parser.parseString(body, function (err, result) {

                if(err) { reject(Error("xml/rss parsing failed")); }

                console.log(JSON.stringify(result, null, 2));

                var root = result.rss.channel[0];
                var title = root['title'][0];
                var itemsObj = root['item'];

                var items = [];

                itemsObj.forEach(function (item) {
                    if(item['enclosure']) {
                        var src = item['enclosure'][0]['$']['url'];
                        var title = item['title'][0];
                        var picUrl = item['itunes:image'] ? item['itunes:image'][0]['$']['href'] : undefined;
                        var link = item['link'][0];
                        items.push({ title: title, src: src, picUrl : picUrl, link: link });
                    } else {
                        console.log('skipping item');
                    }

                });

                var result = {
                    title: title,
                    items: items
                };

                resolve(result);
            });
        });
    });

};

module.exports = { getFeed : getFeed };
