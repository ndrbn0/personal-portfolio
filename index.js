// script.js

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz9Ru0BELg5lo6djHE5vBF2YnNxReoelkNPyykZUe6PTjsMRYdQa_YMmCKVoL2AQTfo/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener("DOMContentLoaded", function () {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  var sidemenu = document.getElementById("sidemenu");
  var modalWebDeveloper = document.getElementById("myModalWebDeveloper"); // Updated ID
  var modalAppDesign = document.getElementById("myModalAppDesign");
  var modalUIUX = document.getElementById("myModalUIUX");
  var msg = document.getElementById("msg");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz9Ru0BELg5lo6djHE5vBF2YnNxReoelkNPyykZUe6PTjsMRYdQa_YMmCKVoL2AQTfo/exec";
  const form = document.forms["submit-to-google-sheet"];

  // Tabs functionality
  function opentab(tabname) {
    for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  // Menu functionality
  function openmenu() {
    sidemenu.style.right = "0";
  }

  function closemenu() {
    sidemenu.style.right = "-200px";
  }

  // Form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 3000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });

  // Modal functionality
  document
    .querySelectorAll(".learn-more-link-web-development")
    .forEach(function (link) {
      link.onclick = function (event) {
        event.preventDefault();
        modalWebDeveloper.style.display = "block";
      };
    });

  document
    .querySelectorAll(".learn-more-link-app-design")
    .forEach(function (link) {
      link.onclick = function (event) {
        event.preventDefault();
        modalAppDesign.style.display = "block";
      };
    });

  document.querySelectorAll(".learn-more-link-ux-ui").forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault();
      modalUIUX.style.display = "block";
    };
  });

  // Closing modals
  function closeModal(modal) {
    modal.style.display = "none";
  }

  document.querySelectorAll(".close").forEach(function (span) {
    span.onclick = function () {
      closeModal(span.parentElement.parentElement);
    };
  });

  window.onclick = function (event) {
    if (
      event.target === modalWebDeveloper ||
      event.target === modalAppDesign ||
      event.target === modalUIUX
    ) {
      closeModal(event.target);
    }
  };
});
