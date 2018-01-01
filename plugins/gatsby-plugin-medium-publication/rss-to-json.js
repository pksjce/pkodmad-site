var util = require("util"),
  xml2js = require("xml2js"),
  request = require("request");

const processor = function(json) {
  var channel = json.rss.channel;
  var rss = { items: [] };
  if (util.isArray(json.rss.channel)) channel = json.rss.channel[0];

  if (channel.title) {
    rss.title = channel.title[0];
  }
  if (channel.description) {
    rss.description = channel.description[0];
  }
  if (channel.link) {
    rss.url = channel.link[0];
  }

  // add rss.image via @dubyajaysmith
  if (channel.image) {
    rss.image = channel.image[0].url;
  }

  if (!rss.image && channel["itunes:image"]) {
    rss.image = channel["itunes:image"][0].href;
  }

  rss.image = rss.image && Array.isArray(rss.image) ? rss.image[0] : "";

  rss.items = channel.item;
  return rss;
};

module.exports = function(url, callback) {
  var $ = this;
  return request(
    {
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0",
        accept: "text/html,application/xhtml+xml"
      },
      pool: false,
      followRedirect: true
    },
    function(error, response, xml) {
      if (!error && response.statusCode == 200) {
        var parser = new xml2js.Parser({
          trim: false,
          normalize: true,
          mergeAttrs: true
        });
        parser.addListener("error", function(err) {
          callback(err, null);
        });
        parser.parseString(xml, function(err, result) {
          callback(null, processor(result));
          //console.log(JSON.stringify(result.rss.channel));
        });
      } else {
        this.emit("error", new Error("Bad status code"));
      }
    }
  );
};
