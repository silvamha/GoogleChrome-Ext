// Wait for the DOM to load completely before running the code
document.addEventListener("DOMContentLoaded", function () {
  const inputEl = document.querySelector("#input-el");
  const inputBtn = document.querySelector("#input-btn");
  const deleteBtn = document.querySelector("#delete-btn");
  const divUlContainer = document.createElement("div");
  document.querySelector("body").append(divUlContainer);
  divUlContainer.setAttribute("id", "div-ul-container-el");

  const uLEl = document.createElement("ul");
  uLEl.setAttribute("id", "ul-el");
  document.querySelector("#div-ul-container-el").append(uLEl);

  // Initialize the leads array (if leads exist in localStorage, use them)
  let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];

  // Function to render all leads
  function renderLeads() {
    uLEl.innerHTML = ""; // Clear the UL before re-rendering

    myLeads.forEach((lead) => {
      // Loop through all the leads in the array
      const liEl = document.createElement("li"); // Create an LI for each lead

      const aEl = document.createElement("a"); // Create an anchor element
      aEl.href = lead; // Set the anchor's href to the lead (URL)
      aEl.textContent = lead; // Set the anchor's text to the lead (URL)
      aEl.target = "_blank"; // Make the link open in a new tab

      liEl.appendChild(aEl); // Append the anchor to the list item
      uLEl.appendChild(liEl); // Append the list item to the UL
    });
  }

  // Render leads on page load if there are any stored
  renderLeads();

  // Add an event listener for the button click
  inputBtn.addEventListener("click", () => {
    let inputValue = inputEl.value;

    if (inputValue) {
      // Only add the input if it's not empty
      myLeads.unshift(inputValue); // Add the input value to the array
      localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Save updated array to localStorage
      renderLeads(); // Re-render the updated list of leads
      clearField(); // Clear the input field after saving the lead
    }
    // Function to clear the input field after saving
    function clearField() {
      inputEl.value = "";
    }
  });

  deleteBtn.addEventListener("dblclick", () => {
    deleteAll();
    console.log("Cleared all");
  });

  function deleteAll() {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
  }
});

const addFunction = (x, y) {
  return x + y
}

console.log( add(3, 4)   ) // should log 7
console.log( add(9, 102) ) // should log 111
