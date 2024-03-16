import "./views/home";
import "./views/flights";
import "./views/things";
import "./views/maps";
import "./views/itinerary";
import "./views/login";
import "./views/profile";

export default [
  
  {
    path: "/flights/",
    component: "flight-view"
  },
  {
    path: "/",
    component: "homepage-view"
  },
  {
    path: "/things/",
    component: "things-view"
  },
  {
    path: "/maps/",
    component: "maps-view"
  },
  {
    path: "/itinerary/",
    component: "itinerary-view"
  },
  {
    path: "/profile/",
    component: "profile-view"
  },
  {
    path: "/login/",
    component: "login-view"
  },
  

  { path: "(.*)", redirect: "/" }
];