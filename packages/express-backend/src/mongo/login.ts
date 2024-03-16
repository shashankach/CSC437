import { Schema, Model, Document, model } from "mongoose";
import { Login } from "ts-models";

const loginSchema = new Schema<Login>(
  {
    userid: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
  },
  { collection: "logins" }
);

const LoginModel = model<Login>("Login", loginSchema);

export default LoginModel;