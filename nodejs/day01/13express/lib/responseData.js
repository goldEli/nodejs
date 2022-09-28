function onSuccess(data = null, message = "操作成功") {
  return {
    code: 1,
    data,
    message,
  };
}

function onError(message = "操作错误") {
  return {
    code: 0,
    message,
  };
}

const responseData = {
  onSuccess,
  onError,
};

module.exports = responseData;
