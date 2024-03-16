import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import * as App from "../app";

import '../components/drop-down';

@customElement("login-view")
class LoginPage extends App.View {

  @state() private showSignup: boolean = false;

  static styles = css`
    /* Add your existing styles here */
    .login-container, .signup-container {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: auto;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .toggle-button {
      margin-top: 20px;
      padding: 10px;
      background-color: var(--button-background-color, blue);
      color: white;
      cursor: pointer;
      text-align: center;
    }
  `;

  render() {
    return html`
      ${this.showSignup ? this.renderSignup() : this.renderLogin()}
    `;
  }

  private toggleForm() {
    this.showSignup = !this.showSignup;
  }

  private renderLogin() {
    return html`
      <div class="login-container">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Login</button>
        <div class="toggle-button" @click="${this.toggleForm}">Don't have an account? Sign up</div>
      </div>
    `;
  }

  private renderSignup() {
    return html`
      <div class="signup-container">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Sign Up</button>
        <div class="toggle-button" @click="${this.toggleForm}">Already have an account? Sign in</div>
      </div>
    `;
  }
}
