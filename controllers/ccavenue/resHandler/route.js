const { postRes } = require("./ccavResponseHandler");

function processedData(request) {
  try {
    const resp = postRes(request);
    return resp;
  } catch (err) {
    console.log(err);
    return err
  }
}

module.exports = {processedData}
