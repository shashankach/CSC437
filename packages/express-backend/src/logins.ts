import { Document } from "mongoose";
import { Login } from "ts-models";
import LoginModel from "./mongo/login";

function index(): Promise<Login[]> {
  return LoginModel.find({});
}

function get(userid : String): Promise<Login> {
  return LoginModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(login: Login): Promise<Login> {
  const p = new LoginModel(login);
  return p.save();
}

function update(userid : String, login: Login): Promise<Login> {
  return new Promise((resolve, reject) => {
    LoginModel.findOneAndUpdate({ userid }, login, {
      new: true,
    }).then((login) => {
      if (login) resolve(login);
      else reject("Failed to update profile");
    });
  });
}

export default { index, get, create, update };
