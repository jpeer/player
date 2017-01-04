var rss = require('./rss');

rss.getFeed('http://gdjb.podbean.com/feed/').then(
    function(result) { console.log(result); },
    function(err) { console.log(err); });