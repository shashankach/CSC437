import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";
import { Profile, Flight } from "ts-models";

const dispatch = App.createDispatch();
export default dispatch.update;

dispatch.addMessage("LoginSubmitted", (msg: App.Message) => {
  const { userid, password } = msg as App.LoginSubmitted;
  return new JSONRequest({
    userid: userid,
    password: password
  }).post("login")
  .then((response: Response) => {
    if (response.status === 200) {
      return response.json();
    }
    return undefined;
  })
  .then((json: unknown) => {
    if (json) {
      console.log("Login:", json);
      return json as Profile;
    }
  })
  .then((profile: Profile | undefined) =>
    profile ? App.updateProps({ profile }) : App.noUpdate
  );
});

dispatch.addMessage("FlightListLoaded", (_: App.Message) => {
  
  
  return new APIRequest()
    .get("/flights/")
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
     
      return undefined;
    })
    .then((json: unknown) => {
      
      if (json) {
        console.log("Flights:", json);
        return json as Flight[];
      }
    })
    .then((flightList: Flight[] | undefined) =>
      flightList ? App.updateProps({ flightList }) : App.noUpdate
    );
  });


dispatch.addMessage("ProfileSelected", (msg: App.Message) => {
  const { userid } = msg as App.ProfileSelected;

  return new APIRequest()
    .get(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Profile;
      }
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("ProfileSaved", (msg: App.Message) => {
  const { userid, profile } = msg as App.ProfileSaved;

  return new JSONRequest(profile)
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});
