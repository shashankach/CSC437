import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import '../components/vaadin-router';
import routes from "../routes";

import './user-profile';
import update from "../update";

@customElement("travelbuddy-app")
class TravelBuddy extends App.Main {
    constructor() {

        super(update);
    }
  static styles = css``;

  render() {
    return html`
    <vaadin-router .routes=${routes}> </vaadin-router>
    `;
  }
}