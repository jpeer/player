var request = require('request'),
    xml2js = require('xml2js');


var getFeed = function(url) {

    console.log('trying to download from: ', url);

    var parser = new xml2js.Parser();

    return new Promise(function(resolve, reject) {

        request(url, function (err, res, body) {

            if(err) { reject(Error("http download failed")); }

            parser.parseString(body, function (err, result) {

                if(err) { reject(Error("xml/rss parsing failed")); }

                //console.log(JSON.stringify(result, null, 2));

                var root = result.rss.channel[0];
                var title = root['title'][0];
                var itemsObj = root['item'];

                var items = [];

                itemsObj.forEach(function (item) {
                    var url = item['enclosure'][0]['$']['url'];
                    var title = item['title'][0];
                    var picUrl = item['itunes:image'][0]['$']['href'];
                    items.push({ title: title, url: url, picUrl : picUrl });
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
