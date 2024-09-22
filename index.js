const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const divUlContainer = document.createElement("div");
document.querySelector("body").append(divUlContainer);
divUlContainer.setAttribute("id", "div-ul-container-el");
const uLEl = document.createElement("ul");
uLEl.setAttribute("id", "ul-el");
document.querySelector("#div-ul-container-el").append(uLEl);

let myLeads = [];

// myLeads = JSON.parse(myLeads);

// myLeads.push("www.rock.com")

// myLeads = JSON.stringify(myLeads);

// console.log(typeof myLeads)

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", () => {
  let inputValue = inputEl.value;
  myLeads.push(inputValue);
  clearField();
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  
  console.log( localStorage.getItem("myLeads") )
});

const renderLeads = () =>{
const liEl = document.createElement("li");
  //   liEl.textContent = inputValue;
  liEl.setAttribute("class", "li-el");

  const aEl = document.createElement("a");
  aEl.href = inputValue;
  aEl.textContent = inputValue;
  aEl.target = "_blank";

  liEl.appendChild(aEl);
  uLEl.appendChild(liEl);

  console.log(myLeads);
  console.log(aEl.href);
  console.log(uLEl);
}

let clearField = () => {
  inputEl.value = "";
};
