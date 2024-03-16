"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var flights_exports = {};
__export(flights_exports, {
  default: () => flights_default
});
module.exports = __toCommonJS(flights_exports);
var import_flight = __toESM(require("./mongo/flight"));
function index() {
  return import_flight.default.find({});
}
function get(flightNumber) {
  return import_flight.default.find({ flightNumber }).then((list) => list[0]).catch((err) => {
    throw `${flightNumber} Not Found`;
  });
}
function create(flight) {
  const p = new import_flight.default(flight);
  return p.save();
}
function update(flightNumber, flight) {
  return new Promise((resolve, reject) => {
    import_flight.default.findOneAndUpdate({ flightNumber }, flight, {
      new: true
    }).then((flight2) => {
      if (flight2)
        resolve(flight2);
      else
        reject("Failed to update profile");
    });
  });
}
var flights_default = { index, get, create, update };
