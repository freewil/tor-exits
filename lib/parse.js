var regexExitNode = /^ExitNode ([0-9A-F]+)$/,
    regexPublished = /^Published (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$/,
    regexLastStatus = /^LastStatus (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$/,
    regexExitAddress = /^ExitAddress (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}) (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$/;

module.exports = function parse(data) {
  var records = [],
      record,
      result,
      recordBroken = false;
  
  var lines = data.split('\n');
  for (var i = 0; i < lines.length; ++i) {
    
    switch (i % 4) {
      // ExitNode
      case 0:
        record = {};
        result = regexExitNode.exec(lines[i]);
        if (!result) {
          recordBroken = true;
        } else {
          recordBroken = false;
          record.exitNode = result[1];
        }
        break;
      
      // Published
      case 1:
        if (!recordBroken) {
          result = regexPublished.exec(lines[i]);
          if (!result) {
            recordBroken = true;
          } else {
            record.published = result[1];
          }
        }
        break;
      
      // LastStatus
      case 2:
        if (!recordBroken) {
          result = regexLastStatus.exec(lines[i]);
          if (!result) {
            recordBroken = true;
          } else {
            record.lastStatus = result[1];
          }
        }
        break;
      
      // ExitAddress
      case 3:
        if (!recordBroken) {
          result = regexExitAddress.exec(lines[i]);
          if (result) {
            record.exitAddress = { address: result[1], timestamp: result[2] };
            records.push(record);
          }
        }
        break;
    } // end switch
  } // end for
  
  return records;
};
