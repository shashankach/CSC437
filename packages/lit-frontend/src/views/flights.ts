import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as App from "../app";

import '../components/drop-down';
import '../components/list';
import { Flight} from "ts-models";

@customElement("flight-view")
class FlightPage extends App.View{

    @property({ type: Array })
    get flights() {
        return this.getFromModel<Flight[]>("flightList");
    }

    connectedCallback(): void {
        super.connectedCallback();
        // fetch('http://localhost:3000/api/flights')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         this.data = data;
        //     });
        this.dispatchMessage({ type: "FlightListLoaded" });
        let data = [
            {
                day: 'Day 1',
                route: 'SFO - LHR',
                airline: 'British Airways',
                flightNumber: 'BA 284',
                airplane: 'Airbus A380-800',
                sortOrder: 0
            },
            {
                day: 'Day 3',
                route: 'LHR - CDG',
                airline: 'Air France',
                flightNumber: 'AF 1381',
                airplane: 'Airbus A320-200',
                sortOrder: 2
            },
            {
                day: 'Day 2',
                route: 'CDG - SFO',
                airline: 'United Airlines',
                flightNumber: 'UA 984',
                airplane: 'Boeing 777-200ER',
                sortOrder: 1
            }];
    }
    
  static styles = css`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.main-container {
    display: flex; /* This makes the sidebar and flights-container display side by side */
    width: 100%; /* Adjust as necessary */
    max-width: 1200px; /* Optional: limits the maximum width of the content */
}

.sidebar {
    background-color: #f06d47;
    padding: 20px;
    width: 250px;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
}

.navbar-item {
    background-color: white;
    color: black;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: block;
}

.flights-container {
    background-color: #8dc3d6;
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto; /* Allows scrolling if the content exceeds the viewport height */
}

.flight {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .main-container {
        flex-direction: column; /* Stack the sidebar and flights-container on smaller screens */
    }

    .sidebar, .flights-container {
        width: 100%; /* Full width for both on smaller screens */
        height: auto; /* Adjust height automatically */
    }
}
`;

  render() {
    return html`
    <drop-down align="left">
        <div class="dropdown">
            <div>Menu</div>
            <div class="dropdown-content" slot="menu">
                <script>
                    // Simple dark mode toggle script
                    document.getElementById('darkModeToggle').addEventListener('change', function() {
                        document.body.classList.toggle('dark-mode');
                    });
                </script>
            </div>
        </div>
        
        </drop-down>
    
    <div class="main-container"> <!-- Wrapper for sidebar and flights-container -->
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="navbar">
                <a href="/" class="navbar-item">Home</a>
                <a href="/flights/" class="navbar-item">Flights</a>
                <a href="/itinerary/" class="navbar-item">Itinerary</a>
                <a href="/things/" class="navbar-item">Things to Do</a>
                <a href="/maps/" class="navbar-item">Map</a>
            </div>
        </div>
        
        <list-f .data=${this.flights}></list-f>

        <!-- Flights Container -->
    `;
  }
}