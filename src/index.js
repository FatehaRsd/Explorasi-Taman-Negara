function order() {
  let come = prompt("Have you come to Pahang National Park before?");
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  if (come.toLowerCase() === "yes") {
    alert(
      "How's your experience," + " " + name + "? " + "Feel free to come back!"
    );
  } else {
    alert(
      "Thanks," +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch & send more details to your email, " +
        " " +
        email +
        "!"
    );
  }
}

function toggleTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    theme = "light";
  } else {
    body.classList.add("dark");
    theme = "dark";
  }
}

let button = document.querySelector("#btn-order");
button.addEventListener("click", order);

let theme = document.querySelector("body").classList.contains("dark")
  ? "dark"
  : "light";
let themeButton = document.querySelector("#btn-change-theme");
themeButton.addEventListener("click", toggleTheme);
