let myLeads = [];
let oldLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const localstorage = JSON.parse(localStorage.getItem('myLeads'));

const tabBtn = document.getElementById('tab-btn');

tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener('dblclick', function () {
  console.log('double clicked!');
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

console.log(localstorage);

if (localstorage) {
  myLeads = localstorage;
  render(myLeads);
}

function render(Leads) {
  let listItems = '';
  for (let i = 0; i < Leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${Leads[i]}'>
                    ${Leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLeads', JSON.stringify(myLeads));

  render(myLeads);
});

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 4));
console.log(add(9, 102));

function getFirst(arr) {
  return arr[0];
}
let firstCard = getFirst([10, 2, 5]);
console.log(firstCard);
