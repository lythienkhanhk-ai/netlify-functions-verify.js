exports.handler = async function (event) {
  const key = event.queryStringParameters?.key;

  if (!key) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        message: "Thiếu key"
      })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      key: key,
      message: "Đã nhận key"
    })
  };
};
