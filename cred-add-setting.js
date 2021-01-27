var request = require('request');

module.exports = function (RED) {

  function CredAddSettingConfig(config) {
    RED.nodes.createNode(this, config);
    var node = this;
  }
  RED.nodes.registerType("cred-add-setting-config", CredAddSettingConfig, {
    credentials: {
      apitoken: {type:"text"},
      password: {type:"password"}
    }
  });

  function CredAddSetting(config) {
    RED.nodes.createNode(this, config);

    console.log(this);
    console.log(config);

    this.current_setting = RED.nodes.getNode(config.setting);
    this.apitoken = this.current_setting.credentials.apitoken;
    this.password = this.current_setting.credentials.password;

    console.log("config.setting",config.setting);
    console.log("this.apitoken",this.apitoken);
    console.log("this.password",this.password);

    var node = this;
    node.on('input', function (msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("cred-add-setting", CredAddSetting, {});
}