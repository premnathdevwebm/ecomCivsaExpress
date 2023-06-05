const { requestProcess } = require("./ccavenue/reqHandler/route");
const { processedData  } = require("./ccavenue/resHandler/route");

exports.reqExample = async (req, res) => {
  try {
    const {amount, user} = (req.body);
    const responseData = requestProcess({amount, user})
    return res.send(responseData);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error");
  }
};

exports.resExample = async (req, res) => {
  try {
    const resp = processedData(req.body);
    res.setHeader('Content-Type', 'text/html');
    return res.send(resp);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error");
  }
};
