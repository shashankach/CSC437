import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import * as App from "../app";
import { Router } from "@vaadin/router";


@customElement("login-view")
class LoginPage extends App.View {

  

  @state() private showSignup: boolean = false;
  @state() private username: string = '';
  @state() private password: string = '';


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



  private handleUsernameChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.username = target.value;
    
  }
  
  
  private handlePasswordChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.password = target.value;
  }
  
  private performLogin() {
    console.log("Logging in with username:", this.username, "and password:", this.password);
    this.dispatchMessage({type: "LoginSubmitted", userid: this.username, password: this.password});
    Router.go("/home");

    // Here you would dispatch your login message or perform further login logic
  }
  
  private renderLogin() {
    return html`
      <div class="login-container">
        <input id="username" type="text" placeholder="Username" @input=${this.handleUsernameChange}>
        <input id="password" type="password" placeholder="Password" @input=${this.handlePasswordChange}>
        <button @click=${this.performLogin}>Login</button>
        <div class="toggle-button" @click="${this.toggleForm}">Don't have an account? Sign up</div>
      </div>
    `;
  }
  constructor() {
    super();
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.performLogin = this.performLogin.bind(this);
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
