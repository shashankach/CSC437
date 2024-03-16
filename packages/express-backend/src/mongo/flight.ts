import { Schema, Model, Document, model } from "mongoose";
import { Flight } from "ts-models";

const flightSchema = new Schema<Flight>(
  {
    day : { type: String, trim: true },
    route : { type: String, trim: true },
    airline : { type: String, trim: true },
    flightNumber : { type: String, trim: true },
    airplane : { type: String, trim: true },
    sortOrder : { type: Number }

  },
  { collection: "flights" }
);


const FlightModel = model<Flight>("Flight", flightSchema);
export default FlightModel;