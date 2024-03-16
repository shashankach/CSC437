import { Document } from "mongoose";
import { Flight } from "ts-models";
import FlightModel from "./mongo/flight";

function index(): Promise<Flight[]> {
  return FlightModel.find({});
}

function get(flightNumber : String): Promise<Flight> {
  return FlightModel.find({ flightNumber })
    .then((list) => list[0])
    .catch((err) => {
      throw `${flightNumber} Not Found`;
    });
}

function create(flight: Flight): Promise<Flight> {
  const p = new FlightModel(flight);
  return p.save();
}

function update(flightNumber : String, flight: Flight): Promise<Flight> {
  return new Promise((resolve, reject) => {
    FlightModel.findOneAndUpdate({ flightNumber }, flight, {
      new: true,
    }).then((flight) => {
      if (flight) resolve(flight);
      else reject("Failed to update profile");
    });
  });
}

export default { index, get, create, update };