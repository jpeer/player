var request = require('request');
var FeedParser = require('feedparser');

var getFeed = function (url) {

    return new Promise(function (resolve, reject) {

        var title = '';
        var items = [];

        request.get(url)
            .on('error', function (error) {
                console.error(error);
                reject(error);
            })
            .pipe(new FeedParser())
            .on('error', function (error) {
                console.error(error);
                reject(error);
            })
            .on('meta', function (meta) {
                title = meta.title;
            })
            .on('readable', function () {
                var stream = this, item;
                while (item = stream.read()) {
                    if(item.enclosures.length == 0) { continue; }
                    items.push({
                        title: item.title,
                        src: item.enclosures[0].url,
                        picUrl: item.image.url,
                        link: item.link
                    });
                }
            })
            .on('end', function () {
                 resolve({title: title, items: items})
            });
    });
}

module.exports = { getFeed: getFeed };
