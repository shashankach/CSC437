import express, { Request, Response } from "express";
import { connect } from "./mongoConnect";
import profiles from "./profiles";
import flights from "./flights";
import logins from "./logins";
import { Profile,Flight,Login } from "ts-models";

import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connect("cluster0")

app.get("/hello", (req: Request, res: Response) => {
    flights.create({flightNumber: "123"})
    res.send("Hello, World");}
);

app.get("/api/profile/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;
  
    profiles
      .get(userid)
      .then((profile: Profile) => res.json(profile))
      .catch((err) => res.status(404).end());
  });

app.post("/api/profiles", (req: Request, res: Response) => {
    const newProfile = req.body;
  
    profiles
      .create(newProfile)
      .then((profile: Profile) => res.status(201).send(profile))
      .catch((err) => res.status(500).send(err));
  });

  app.get("/api/flight/:flightNumber", (req: Request, res: Response) => {
    const { flightNumber } = req.params;
  
    flights
      .get(flightNumber)
      .then((flight: Flight) => res.json(flight))
      .catch((err) => res.status(404).end());
  });

  app.get("/api/flights", async (req: Request, res: Response) => {
    res.send(await flights.index())
    flights
      .index()
      .then((flights: Flight[]) => res.json(flights))
      .catch((err) => res.status(404).end());
  });

  app.put("/api/profiles/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;
    const newProfile = req.body;
  
    profiles
      .update(userid, newProfile)
      .then((profile: Profile) => res.json(profile))
      .catch((err) => res.status(404).end());
  });

  app.post("/api/logins", (req: Request, res: Response) => {
    const newLogin = req.body;
  
    logins
      .create(newLogin)
      .then((login: Login) => res.status(201).send(login))
      .catch((err) => res.status(500).send(err));
  });



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
