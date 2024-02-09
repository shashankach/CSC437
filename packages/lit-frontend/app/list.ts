import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("list-f")
export class ListElement extends LitElement {
    @property({ type: Array })
    data = [];

    @property({ type: Boolean })
    sortAscending = true; // Property to track sort direction

    // Method to toggle sort direction and sort data
    toggleSort() {
        this.sortAscending = !this.sortAscending;
        this.sortData();
    }

    // Method to sort the flights data
    sortData() {
        this.data = [...this.data].sort((a, b) => {
            return this.sortAscending ? a.sortOrder - b.sortOrder : b.sortOrder - a.sortOrder;
        });
        this.requestUpdate();
    }

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
        return html`
            <button @click="${this.toggleSort}">Sort (Toggles Ascending & Descending)</button>
            <div class="main-container">
                ${this.data.map(flight => this.renderFlightInfo(flight))}
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            margin: 0;
            padding: 0;
        }

        .main-container {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .flight {
            background-color: white;
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 10px;
            width: 100%;
        }

        .icon {
            width: 16px;
            height: 16px;
        }

        button {
            margin: 10px;
            padding: 5px 10px;
            cursor: pointer;
        }
    `;
}
