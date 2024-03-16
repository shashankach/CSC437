import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";

import '../components/drop-down';

@customElement("maps-view")
class MapsPage extends App.View{
    
  static styles = css`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

/* Sidebar styles */
.sidebar {
    background-color: var(--sidebar-background-color, #f06d47);
    padding: 20px;
    width: 250px; /* Fixed width for the sidebar */
    height: 100vh; /* Full height */
    box-sizing: border-box; /* Include padding in width calculation */
    float: left; /* Float the sidebar to the left */
}

/* Navbar and navbar items */
.navbar {
    display: block;
}

.navbar-item {
    background-color: var(--item-background-color, white);
    color: var(--text-color);
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: block; /* Block-level elements stack vertically */
}

/* Map container styles */
.map-container {
    margin-left: 270px; /* Add left margin equal to the sidebar width plus padding */
    height: 100vh; /* Full viewport height */
    box-sizing: border-box;
    overflow: hidden;
}

/* Iframe styles within the map container */
iframe {
    width: calc(100% - 270px); /* Subtract the sidebar width */
    height: 100%;
    border: none;
}

/* Clearfix for the floated sidebar */
body::after {
    content: "";
    display: table;
    clear: both;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
    .sidebar, 
    .map-container {
        width: 100%; /* Full width for both on smaller screens */
        height: auto; /* Adjust height automatically */
        float: none; /* Disable float for mobile view */
        margin-left: 0; /* Reset margins */
    }

    iframe {
        width: 100%; /* Full width for iframe on smaller screens */
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
    
    <div class="map-container">
        <h1>Map of London</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58518354257!2d-0.266402471571921!3d51.528526204716215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1705474888621!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `;
  }
}