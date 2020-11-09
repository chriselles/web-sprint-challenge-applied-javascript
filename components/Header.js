// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // Main header container
    const headerContainer = document.createElement("div");
    // Add attribute to main container
    headerContainer.classList.add("header");
    // Create child elements
    const headerDate = document.createElement("span");
    const headerTitle = document.createElement("h1");
    const headerTemp = document.createElement("span");
    // Add attributes to header children
    headerDate.classList.add("date");
    headerTemp.classList.add("temp");
    // Add content to child elements
    headerDate.textContent = "MARCH 28, 2020";
    headerTitle.textContent = "Lambda Times";
    headerTemp.textContent = "98°";
    // Append children to main container
    const headerChildren = [headerDate, headerTitle, headerTemp];
    headerChildren.forEach((element) => {
        headerContainer.appendChild(element);
    });
    // Return the entire header HTML
    return headerContainer;
}

// USe above component to append header to DOM

const headerElement = document.querySelector("div.header-container");
const newHeader = Header();
headerElement.appendChild(newHeader);
