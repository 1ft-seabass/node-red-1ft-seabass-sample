var request = require('request');

module.exports = function (RED) {

  function CredAddSettingConfig(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.value1 = config.value1;
  }
  RED.nodes.registerType("cred-add-setting-config", CredAddSettingConfig, {
    credentials: {
      apitoken: {type:"text"},
      password: {type:"password"}
    }
  });

  function CredAddSetting(config) {
    RED.nodes.createNode(this, config);

    this.current_setting = RED.nodes.getNode(config.setting);
    this.value1 = this.current_setting.value1;
    this.apitoken = this.current_setting.credentials.apitoken;
    this.password = this.current_setting.credentials.password;

    console.log("this.current_setting", this.current_setting);

    console.log("config.setting",config.setting);
    console.log("this.apitoken",this.apitoken);
    console.log("this.password",this.password);
    console.log("this.value1",this.value1);

    var node = this;
    node.on('input', function (msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("cred-add-setting", CredAddSetting, {});
}