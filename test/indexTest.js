require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("structure", function () {
  context("within index.html", function () {
    it("contains a <html> tag", function () {
      const htmlTag = document.querySelector("html");
      expect(htmlTag).to.exist;
    });
  });
});