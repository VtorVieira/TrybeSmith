class CustomError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

module.exports = { CustomError };