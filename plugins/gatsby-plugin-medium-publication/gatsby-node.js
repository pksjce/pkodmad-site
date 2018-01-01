const load = require("./rss-to-json");
const crypto = require("crypto");
const kebabCase = require("lodash/kebabCase");
const Promise = require("bluebird");

const loadRss = Promise.promisify(load);

const processDatum = item => {
  const digest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(item))
    .digest(`hex`);
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

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  const rss = await loadRss("https://medium.com/feed/in-my-time-of-living");

  rss.items.forEach(item => {
    console.log("creating node");
    createNode(processDatum(item));
  });

  return;
};
