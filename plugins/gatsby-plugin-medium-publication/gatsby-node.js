function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

const load = require("./rss-to-json");

const crypto = require("crypto");

const kebabCase = require("lodash/kebabCase");

const _Promise = require("bluebird");

const loadRss = _Promise.promisify(load);

const processDatum = item => {
  const digest = crypto.createHash(`md5`).update(JSON.stringify(item)).digest(`hex`);
  const data = Object.assign({}, item, {
    id: item.guid[0]._,
    path: `/prose/${kebabCase(item.title)}`,
    parent: "__MEDIUM__",
    children: [],
    post: item["content:encoded"],
    authors: item["dc:creator"],
    title: item.title,
    internal: {
      type: "MediumPub",
      contentDigest: digest
    }
  });
  return data;
};

exports.sourceNodes =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* ({
    boundActionCreators
  }) {
    const {
      createNode
    } = boundActionCreators;
    const rss = yield loadRss("https://medium.com/feed/in-my-time-of-living");
    rss.items.forEach(item => {
      console.log("creating node");
      createNode(processDatum(item));
    });
    return;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();