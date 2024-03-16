import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";

import '../components/drop-down';

@customElement("things-view")
class ThingsPage extends App.View{
    
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
    width: 250px;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
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
    text-align: center;
    text-decoration: none;
    display: block;
}

.main-content {
    flex-grow: 1; /* Allows the main content to fill the remaining space */
    padding: 20px;
    overflow-y: auto; /* Scroll if content exceeds the viewport height */
}

/* h1 {
    text-align: left; /* Align the title to the left */
/* }

ol {
    padding-left: 20px; /* Indent the list for better readability */
/* } */ 
h1,ol {
    margin: 0;
    padding-left: 0; /* Adjust if you want some spacing */
}`;

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
<div class="content-container"> <!-- Wrapper for sidebar and content -->
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
    <div class="main-content">
        <h1>Top Things to Do in London</h1>
        <ol>
            <li>Visit the British Museum</li>
            <li>Explore the Tower of London</li>
            <li>Enjoy the views from the London Eye</li>
            <li>Walk through Hyde Park</li>
            <li>Experience the history at Westminster Abbey</li>
            <li>Shop at Camden Market</li>
            <li>See a show in the West End</li>
        </ol>
    </div>
</div>
    `;
  }
}