module.exports = class ServiceResponce {
  Message = null;
  Token = null;
  Errors = null;
  IsSuccess = false;
  constructor(message, token = null, errors = null, isSuccess = false) {
    this.Message = message;
    this.Token = token;
    this.Errors = errors;
    this.IsSuccess = isSuccess;
  }
};
