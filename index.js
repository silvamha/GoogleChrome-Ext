// Wait for the DOM to load completely before running the code
document.addEventListener("DOMContentLoaded", function () {
  const inputEl = document.querySelector("#input-el");
  const inputNameEl = document.querySelector("#input-name-el");
  const inputBtn = document.querySelector("#input-btn");
  const divUlContainer = document.createElement("div");
  document.querySelector("body").append(divUlContainer);
  divUlContainer.setAttribute("id", "div-ul-container-el");

  const uLEl = document.createElement("ul");
  uLEl.setAttribute("id", "ul-el");
  document.querySelector("#div-ul-container-el").append(uLEl);

  // Initialize the leads array (If leads existin localStorage, use them)
  let myLeads = (leadsFromLocalStorage =
    JSON.parse(localStorage.getItem("myLeads")) || []);

  if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
  }

  console.log(leadsFromLocalStorage);

  function renderLeads() {
    uLEl.innerHTML = "";

    myLeads.forEach((lead) => {
      const liEl = document.createElement("li");

      const aEl = document.createElement("a");
      aEl.href = lead;
      aEl.textContent = lead;
      aEl.target = "_blank";

      liEl.appendChild(aEl);
      uLEl.appendChild(liEl);

      // liEl.textContent = lead;
      // uLEl.appendChild(liEl);
    });

    // console.log(myLeads);
    // console.log(aEl.href);
    // console.log(uLEl);
  }

  renderLeads();

  // Add an event listener for the button click
  inputBtn.addEventListener("click", () => {
    let inputValue = inputEl.value;
    let inputNameValue = inputNameEl.value;

    if (inputValue && inputNameValue) {
      myLeads.unshift({name:inputNameValue, url:inputValue});

      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      renderLeads();
      clearField();
    }
  });

  function clearField() {
    inputEl.value = "";
    inputNameEl.value = "";
  }
});
