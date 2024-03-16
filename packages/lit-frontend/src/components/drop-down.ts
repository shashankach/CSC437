import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("drop-down")
export class DropDownElement extends LitElement {
  @property({ reflect: true, type: Boolean })
  open: boolean = false;

  // Method to toggle dark mode on the document body
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  render() {
    return html`
    <div class="menu-bar" @click="${this._toggle}">
    <slot>Menu</slot>
  </div>
  ${this.open ? html`
    <div class="dropdown-content" slot="menu">
      <ul>
        <li><a href="/profile/">Profile</a></li>
        <li><a href="settings.html">Settings</a></li>
        <li><a href="logout.html">Logout</a></li>
        <li>
          <label class="switch">
            <input type="checkbox" @change="${this.toggleDarkMode}">
            <span class="slider round"></span>
          </label> Toggle Dark Mode
        </li>
      </ul>
    </div>
  ` : ''}
`;
  }

  static styles = css`
  :host {
    display: block;
    width: 100%;
  }

  .menu-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #f06d47; /* Example background color */
    color: white; /* Example text color */
    padding: 10px 20px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .dropdown-content {
    display: block;
    justify-content:left;
    position: absolute;
    width: 100%;
    top: var(--menu-bar-height, 50px); /* Adjust the height as needed */
    left: 0;
    background-color: #f06d47;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 10px 20px;
  }

  a {
    text-decoration: none;
    color: #333; /* Example link color */
    display: block;
  }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid;
      background: white;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `;

  _handleChange(ev: InputEvent) {
    const target = ev.target as HTMLInputElement;
    this._toggle(target.checked);
  }

  _toggle(open: boolean) {
    this.open = open;
    this._toggleClickAway(open);
  }

  _toggleClickAway(open: boolean) {
    const clickawayHandler = (ev: Event) => {
      if (!ev.composedPath().includes(this)) {
        this._toggle(false);
      } else {
        ev.stopPropagation();
      }
    };

    if (open) {
      document.addEventListener("click", clickawayHandler);
    } else {
      document.removeEventListener("click", clickawayHandler);
    }
  }
}
