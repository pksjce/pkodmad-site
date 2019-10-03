// @flow

const React = require("react");
const favicon16 = require("./src/assets/pk-favicon.png");

exports.onRenderBody = ({ setHeadComponents }) =>
  setHeadComponents([
    <title>Pk's blog</title>,
    <link key="small-favicon" rel="icon" href={favicon16} />
  ]);
