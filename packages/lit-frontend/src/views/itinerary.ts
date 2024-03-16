import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";

import '../components/drop-down';

@customElement("itinerary-view")
class ItineraryPage extends App.View{
    
  static styles = css`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.content-container {
    display: flex;
    height: 100vh; /* Ensure it takes the full viewport height */
    width: 100%; /* Ensure it takes the full width */
}

.sidebar {
    background-color: var(--sidebar-background-color, #f06d47);
    padding: 20px;
    width: 250px; /* Keep the sidebar width fixed */
    box-sizing: border-box;
    overflow-y: auto; /* Allow scrolling if needed */
}

.navbar {
    display: flex;
    flex-direction: column;
}

.navbar-item {
    background-color: var(--item-background-color, white);
    color: var(--text-color);
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: left;
    text-decoration: none;
    display: block;
}

.main-content {
    flex-grow: 1; /* Allows the main content to fill the remaining space */
    padding: 20px;
    overflow-y: auto; /* Scroll if content exceeds the viewport height */
}

h1, .itinerary, ol {
    margin: 0;
    padding-left: 0; /* Adjust if you want some spacing */
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
    <div class="content-container"> <!-- Wrap sidebar and main content together -->
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

        <!-- Main Content -->
        <div class="main-content"> <!-- New wrapper for the main content -->
            <h1>3-Day London Itinerary</h1>
            <div class="itinerary">
                <div class="day-title">
                    Day 1: <a href="/flights/" class="flights-link">Arrival from San Francisco <svg class="icon">
                        <use xlink:href="/icons/transportation.svg#icon-train"></use>
                      </svg></a>
                </div>
                <ul>
                    <li>Check-in to the hotel</li>
                    <li>Evening walk through Hyde Park</li>
                    <li>Dinner in a traditional British pub</li>
                </ul>
            </div>
        
            <!-- Day 2 -->
            <div class="itinerary">
                <div class="day-title">Day 2: Exploring History</div>
                <ul>
                    <li>Morning visit to the British Museum</li>
                    <li>Lunch at a nearby cafe</li>
                    <li>Afternoon tour of Westminster Abbey</li>
                    <li>Evening at leisure</li>
                </ul>
            </div>
        
            <!-- Day 3 -->
            <div class="itinerary">
                <div class="day-title">Day 3: Sightseeing and Departure</div>
                       <ul>
                    <li>Ride on the London Eye in the morning</li>
                    <li>Explore Camden Market and have lunch</li>
                    <li>Visit the Tower of London in the afternoon</li>
                    <li>Flight: Depart London to San Francisco in the evening</li>
                </ul>
            </div>
            </div>
            <!-- Additional days' content here -->
        </div>
    </div>
    `;
  }
}