let self = require('sdk/self');

require('sdk/page-mod').PageMod({
  include: ["*"],
  contentScriptFile: [self.data.url('injector.js')],
  attachTo: ["existing", "top"],
  onAttach: function(worker) {
    
  }
});
