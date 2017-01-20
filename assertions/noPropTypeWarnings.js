exports.assertion = function() {
  this.message = 'Testing if any React PropType warnings occurred';

  this.expected = function(){ return "[]" };

  this.pass = function(value) {
    return value.length === 0;
  }

  this.value = function(logEntries){
    var filteredMessages = logEntries.filter(function(log) {
      return log.level === "SEVERE" && log.message.includes("Warning: Failed prop type")
    }).map(function(log){
      var splitMessage = log.message.split('\"Warning: ')[1].split('\\n');
      return splitMessage[0] + '(' + splitMessage[1].trim() + ')'
    });
    return filteredMessages;
  };

  this.command = function(callback){
    this.api.getLog('browser', callback);
  }
}