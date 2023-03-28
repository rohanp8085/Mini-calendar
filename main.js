let months = ["January","February", "March", "April", "May", "Jun", "July","August",
"September","October","November","December",
]

let date = new Date();
let dayNum = date.getDay();
let active = document.querySelector(".week li:nth-child("+dayNum+")")

let Day = date.getDate()
let month = months[date.getMonth()];
let year = date.getFullYear()
// let dayone = date.getDay()

active.classList.add("current");

let h1 = document.createElement("h1")
h1.innerHTML = Day
active.appendChild(h1);


let h5 = document.createElement("h5")
h5.innerHTML = month
active.appendChild(h5);

let h3 = document.createElement("h3")
h3.innerHTML = year
active.appendChild(h3);


// active.innerHTML =  dayone

