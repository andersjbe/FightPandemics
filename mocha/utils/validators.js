const { expect } = require("chai");

exports.validateStatusCodeErrorAndMessage = function (
  response,
  statusCode,
  error,
  message,
) {
  expect(response.body)
    .to.have.a.property("statusCode")
    .to.be.equal(statusCode);
  expect(response.body).to.have.a.property("error").to.be.equal(error);
  expect(response.body).to.have.a.property("message").to.be.equal(message);
};

exports.validateStatusCodeAndSuccess = function (
  response,
  statusCode,
  successMessage,
) {
  expect(response.statusCode).to.be.equal(statusCode);
  expect(response.body)
    .to.have.a.property("success")
    .to.be.equal(successMessage);
};

exports.validateStatusCodeAndOk = function (
  response,
  statusCode,
  serviceName,
  version
) {
  expect(response.body)
    .to.have.a.property("statusCode")
    .to.be.equal(statusCode);
  expect(response.body).to.have.a.property("serviceName").to.be.equal(serviceName);
  expect(response.body).to.have.a.property("version").to.be.equal(version);
};