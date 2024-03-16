import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";

import '../components/drop-down';

@customElement("profile-view")
class ProfilePage extends App.View{
    
  static styles = css`
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    height: 100vh;
    margin: 0;
    overflow: hidden; /* Prevents scrollbars if the content fits the viewport */
}

/* Main container styles */
.main-container {
    width: 100%; /* Ensures it fills the width of the viewport */
    height: 100vh; /* Full viewport height */
}

/* Sidebar styles */
.sidebar {
    background-color: #f06d47; /* Fallback color if the variable is not defined */
    padding: 20px;
    width: 250px; /* Fixed width for the sidebar */
    height: 100vh; /* Full height */
    box-sizing: border-box; /* Include padding in width calculation */
    overflow-y: auto; /* Enable scroll on small screens/high number of itineraries */
    float: left; /* Floats the sidebar to the left */
}

/* Navbar and navbar items */
.navbar {
    display: block; /* Default display for block-level elements */
}

.navbar-item {
    background-color: white; /* Fallback color if the variable is not defined */
    color: black; /* Fallback color if the variable is not defined */
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px; /* Slightly rounded corners for a softer look */
    text-align: center;
    text-decoration: none; /* Remove underline from links */
    display: block; /* Block display will fill the width of the sidebar */
}

/* User panel styles */
.user-panel {
    margin-left: 270px; /* Sidebar width plus its padding */
    display: inline-block; /* Allows for centering */
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    justify: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    vertical-align: center; /* Aligns with the top of the sidebar if they are side by side */
}

.user-panel img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}

/* Clearfix for the floated sidebar */
.main-container::after {
    content: "";
    display: table;
    clear: both;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
    .sidebar {
        width: 100%; /* Full width for the sidebar on smaller screens */
        height: auto; /* Height adjusted to content */
        float: none; /* Removes float on mobile */
    }

    .user-panel {
        margin-left: 0; /* Reset margin since the sidebar is now above */
        display: block; /* Takes the full width */
    }
}
`;

  render() {
    return html`
    <div class="user-panel">
    <user-profile></user-profile>
    </div>
    

    <div class="sidebar">
            <div class="navbar">
                <a href="/" class="navbar-item">Home</a>
                <a href="/flights/" class="navbar-item">Flights</a>
                <a href="/itinerary/" class="navbar-item">Itinerary</a>
                <a href="/things/" class="navbar-item">Things to Do</a>
                <a href="/maps/" class="navbar-item">Map</a>
            </div>
        </div>
    `;
  }
}