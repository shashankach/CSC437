import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";


export interface Profile {
    userid: string;
    name: string;
    nickname?: string;
    city?: string;
  }


@customElement("user-profile")
class ProfileUser extends LitElement {
  @property({ type: String })
  userId = "rogp"
  @property({ type: Object })
  profile: Profile;

  connectedCallback() {
    super.connectedCallback();
    fetch(`http://localhost:3000/api/profile/${this.userId}`)
      .then((res) => res.json())
      .then((profile: Profile) => {
        this.profile = profile;
      });
  }

  static styles = css``
  render() {
    return html`
      <h1>${this.profile.name}</h1>
      <p>${this.profile.userid}</p>
      <p>${this.profile.nickname}</p>
      <p>${this.profile.city}</p>
    `;
  }
}