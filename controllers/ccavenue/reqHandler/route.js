const { postReq } = require("./ccavRequestHandler");

const { API_URL, merchantId, workingKey, accesscode } = process.env;

function requestProcess(request) {
  try {
    const data = {
      merchantId: merchantId,
      workingKey: workingKey,
      accesscode: accesscode,
      reqUrl: `${API_URL}ccares`,
      body: {
        amount: parseFloat(request.amount),
        user: {
          username: request.user.username,
          address1: request.user.address1,
          city: request.user.city,
          state: request.user.state,
          zipcode: request.user.zipcode,
          country: request.user.country,
          email: request.user.email,
          phone: request.user.phone,
        },
      },
    };
    const ccAvenue = postReq(data);
    return { data: ccAvenue };
  } catch (err) {
    return err;
  }
}

module.exports = { requestProcess };
