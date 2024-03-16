import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";

import '../components/drop-down';

@customElement("homepage-view")
class HomePage extends App.View{
    
  static styles = css`
  body {
    background-color: var(--page-background-color);
    color: var(--text-color);
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}
.button-link {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
}

.button-link:hover {
    background-color: #0056b3;
}`;

  render() {
    return html`
    <drop-down align="left">
    <div class="dropdown">
        <div>Menu</div>
        <div class="dropdown-content" slot="menu">
 
        </div>
    </div>
    </drop-down>
<h1>Home</h1>
<div>
    <a href="flights/" class="button-link">Flights</a>
    <a href="things/" class="button-link">Things to Do</a>
    <a href="maps/" class="button-link">Maps</a>
    <a href="itinerary/" class="button-link">Itinerary</a>
</div>
    `;
  }
}