var request = require('request');

module.exports = function (RED) {
  function CredSimple(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function (msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("cred-simple", CredSimple, {
    credentials: {
        apitoken: {type:"text"}
    }
  });
}