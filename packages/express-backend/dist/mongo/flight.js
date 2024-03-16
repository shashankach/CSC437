"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var flight_exports = {};
__export(flight_exports, {
  default: () => flight_default
});
module.exports = __toCommonJS(flight_exports);
var import_mongoose = require("mongoose");
const flightSchema = new import_mongoose.Schema(
  {
    day: { type: String, trim: true },
    route: { type: String, trim: true },
    airline: { type: String, trim: true },
    flightNumber: { type: String, trim: true },
    airplane: { type: String, trim: true },
    sortOrder: { type: Number }
  },
  { collection: "flights" }
);
const FlightModel = (0, import_mongoose.model)("Flight", flightSchema);
var flight_default = FlightModel;
