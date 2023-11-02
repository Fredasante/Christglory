// Javascript for toggle Menu
let navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

function openPage() {
  let answer = document.getElementById("search").value;
  let a1 = /home/i;
  let b1 = /big text/i;
  if (a1.test(answer) || b1.test(answer)) {
    window.open("/index.html ");
  }

  let a2 = /testimonies/i;
  let b2 = /small text/i;
  if (a2.test(answer) || b2.test(answer)) {
    window.open("/testimonies.html ");
  }
  let a3 = /blog/i;
  let b3 = /small text/i;
  if (a3.test(answer) || b3.test(answer)) {
    window.open("/blog.html ");
  }
  let a4 = /event/i;
  let b4 = /small text/i;
  if (a4.test(answer) || b4.test(answer)) {
    window.open("/event.html ");
  }
  let a5 = /worship with us/i;
  let b5 = /small text/i;
  if (a5.test(answer) || b5.test(answer)) {
    window.open("/contact.html ");
  }
}

// FIRST
let text = document.querySelector(".text");
let readMoreBtn = document.getElementById("moreBtn");

readMoreBtn.addEventListener("click", function () {
  text.classList.toggle("show-more");
  if (readMoreBtn.textContent === "Read More") {
    readMoreBtn.textContent = "Show Less";
  } else {
    readMoreBtn.textContent = "Read More";
  }
});

// SECOND
let secondText = document.querySelector(".secondText");
let secondBtn = document.getElementById("secondBtn");

secondBtn.addEventListener("click", function () {
  secondText.classList.toggle("show-more");
  if (secondBtn.textContent === "Read More") {
    secondBtn.textContent = "Show less";
  } else {
    secondBtn.textContent = "Read More";
  }
});

// THIRD
let thirdText = document.querySelector(".thirdText");
let thirdBtn = document.getElementById("thirdBtn");

thirdBtn.addEventListener("click", function () {
  thirdText.classList.toggle("show-more");
  if (thirdBtn.textContent === "Read More") {
    thirdBtn.textContent = "Show less";
  } else {
    thirdBtn.textContent = "Read More";
  }
});

// FOURTH
let fourthText = document.querySelector(".fourthText");
let fourthBtn = document.getElementById("fourthBtn");

fourthBtn.addEventListener("click", function () {
  fourthText.classList.toggle("show-more");
  if (fourthBtn.textContent === "Read More") {
    fourthBtn.textContent = "Show less";
  } else {
    fourthBtn.textContent = "Read More";
  }
});

// FIFTH
let fifthText = document.querySelector(".fifthText");
let fifthBtn = document.getElementById("fifthBtn");

fifthBtn.addEventListener("click", function () {
  fifthText.classList.toggle("show-more");
  if (fifthBtn.textContent === "Read More") {
    fifthBtn.textContent = "Show less";
  } else {
    fifthBtn.textContent = "Read More";
  }
});

// SIXTH USER
let sixthUser = document.querySelector(".sixthUser");
let sixthBtn = document.getElementById("sixthBtn");

sixthBtn.addEventListener("click", function () {
  sixthUser.classList.toggle("show-more");
  if (sixthBtn.textContent === "Read More") {
    sixthBtn.textContent = "Show less";
  } else {
    sixthBtn.textContent = "Read More";
  }
});

// SEVENTH USER
let seventhUser = document.querySelector(".seventhUser");
let seventhBtn = document.getElementById("seventhBtn");

seventhBtn.addEventListener("click", function () {
  seventhUser.classList.toggle("show-more");
  if (seventhBtn.textContent === "Read More") {
    seventhBtn.textContent = "Show less";
  } else {
    seventhBtn.textContent = "Read More";
  }
});

// EIGHTH USER
let eighthUser = document.querySelector(".eighthUser");
let eighthBtn = document.getElementById("eighthBtn");

eighthBtn.addEventListener("click", function () {
  console.log("Eighth");
  eighthUser.classList.toggle("show-more");
  if (eighthBtn.textContent === "Read More") {
    eighthBtn.textContent = "Show less";
  } else {
    eighthBtn.textContent = "Read More";
  }
});

// NINTH USER
let ninthUser = document.querySelector(".ninthUser");
let ninthBtn = document.getElementById("ninthBtn");

ninthBtn.addEventListener("click", function () {
  ninthUser.classList.toggle("show-more");
  if (ninthBtn.textContent === "Read More") {
    ninthBtn.textContent = "Show less";
  } else {
    ninthBtn.textContent = "Read More";
  }
});

// TENTH USER
let tenthUser = document.querySelector(".tenthUser");
let tenthBtn = document.getElementById("tenthBtn");

tenthBtn.addEventListener("click", function () {
  tenthUser.classList.toggle("show-more");
  if (tenthBtn.textContent === "Read More") {
    tenthBtn.textContent = "Show less";
  } else {
    tenthBtn.textContent = "Read More";
  }
});
