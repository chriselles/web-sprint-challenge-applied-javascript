// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// Import Dependencies
import axios from "axios";
// Get the data from API 
const APIUrl = "https://lambda-times-api.herokuapp.com/topics";
const getTabs = axios.get(APIUrl);
// Create Promise
getTabs
  .then((res) => {
    // Get tabs from object
    const allTabs = res.data.topics;
    // Get DOM element to append tabs to
    const tabDomElement = document.querySelector("div.topics");
    // Use tabCreator component to append tab
    allTabs.forEach((tab) => {
      const newTab = tabCreator(tab);
      // Add each tab to DOM
      tabDomElement.appendChild(newTab);
    });
    // console.log to get data;
    console.log("Tabs Data", res);
  })
  .catch((error) => {
    // Get element in to insert the card
    const errorElement = document.querySelector(".errors-container");
    const errorContainer = document.createElement("p");
    // Add error content
    errorContainer.textContent = `${error} for tabs request`;
    // Append error
    errorElement.appendChild(errorContainer);
  });
// Component for creating tab elements
function tabCreator(tab) {
  // Create main tab container
  const tabContainer = document.createElement("div");
  // Add attributes to main container
  tabContainer.classList.add("tab");
  // Add content for tab
  tabContainer.textContent = tab;
  // Add eventListener when tab clicked
  tabContainer.addEventListener("click", (e) => {
    // Get tabs
    const allTabs = document.querySelectorAll(".tabs .tab");
    // Remove the active class from tabs
    allTabs.forEach((element) => {
      element.classList.remove("active-tab");
    });
    // Add active class to element clicked
    tabContainer.classList.add("active-tab");
    // Get cards
    const allCards = document.querySelectorAll(".cards-container .card");
    // if card contains class of clicked tab, keep it. Otherwise, hide it
    allCards.forEach((element) => {
      // For node.js, remove js
      let tabName = tab;
      if (tabName.includes(".")) {
        tabName = tabName.substr(0, tab.lastIndexOf("."));
      }
      if (element.classList.contains(tabName)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });
  // Return tab element
  return tabContainer;
}