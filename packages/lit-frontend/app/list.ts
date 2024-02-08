import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("list-f")
export class listElement extends LitElement {
    @property()
    data = [];

    renderFlightInfo(flight) {
        return html`
        <div class="flight">
            <div class="day">${flight.day}</div>
            <div class="route">${flight.route}</div>
            <div class="airline">${flight.airline} <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG content -->
            </svg></div>
            <div class="flight-number">${flight.flightNumber}</div>
            <div class="airplane">${flight.airplane}</div>
        </div>`;
    }

    render() {
        const s = this.data.map(flight => this.renderFlightInfo(flight));
        return html`<div class="main-container">${s}</div>`;
    }

    static styles = css`
        :host {
            display: block; /* Ensure the host element is block-level to take full width */
            margin: 0;
            padding: 0;
        }

        .main-container {
            display: flex;
            flex-direction: column;
            width: 100%; /* Ensure it takes the full width */
        }

        .flight {
            background-color: white;
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 10px;
            width: 100%; /* Ensure flight elements take full width */
        }

        .icon {
            width: 16px;
            height: 16px;
        }
    `;
}
