module.exports = class ServiceResponce {
  Message = null;
  Token = null;
  Errors = null;
  IsSuccess = false;
  Payload = null;
  constructor(
    message,
    token = null,
    errors = null,
    isSuccess = false,
    payload = null
  ) {
    this.Message = message;
    this.Token = token;
    this.Errors = errors;
    this.IsSuccess = isSuccess;
    this.Payload = payload;
  }
};
