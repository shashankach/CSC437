import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import * as MVU from "./mvu";
import { MsgType } from "./mvu";
import {
    Profile, Flight
} from "ts-models";

export interface Model {
  profile?: Profile;
  flightList: Flight[];
}

export const context = createContext<Model>("BlazingModel");

export const init: Model = {
  profile: undefined,
  flightList: []
};

export interface ProfileSelected
  extends MsgType<"ProfileSelected"> {
  userid: string;
}

export interface FlightListLoaded extends MsgType<"FlightListLoaded"> {}

export interface ProfileSaved extends MsgType<"ProfileSaved"> {
  userid: string;
  profile: Profile;
}

export interface LoginSubmitted extends MsgType<"LoginSubmitted"> {
  userid: string;
  password: string;
}


export type Message =
  | ProfileSelected
  | ProfileSaved
  | LoginSubmitted
  | FlightListLoaded;

export class Main
  extends MVU.Main<Model, Message>
  implements MVU.App<Model, Message>
{
  @provide({ context })
  @state()
  model = init;

  constructor(update: MVU.Update<Model, Message>) {
    super(
      update,
      () => this.model,
      (next: Model) => (this.model = next)
    );
  }
}

export class View extends MVU.View<Message> {
  @consume({ context: context, subscribe: true })
  @property({ attribute: false })
  _model: Model | undefined;

  getFromModel<T>(key: keyof Model) {
    if (this._model) {
      return this._model[key] as T;
    }
  }
}

export const createDispatch = () =>
  new MVU.Dispatch<Model, Message>();

export const updateProps = MVU.updateProps<Model>;
export const noUpdate = MVU.noUpdate<Model>;