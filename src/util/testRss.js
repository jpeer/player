var rss = require('./rss');

//var feeds = ['http://gdjb.podbean.com/feed/'];
// var feeds = ['http://franetic.podbean.com/feed/'];
//var feeds = ['http://feeds.feedburner.com/MarkusSchulzGlobalDJBroadcast'];
var feeds = ['http://franetic.podbean.com/feed'];

feeds.forEach(function (feed) {
    rss.getFeed(feed).then(
        function (result) {
            console.log(result);
        },
        function (err) {
            console.log(err);
        });
});
