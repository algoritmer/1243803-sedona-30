const dateIn = document.querySelector(".appointment-date-in");
const dateOut = document.querySelector(".appointment-date-out");
const adult = document.querySelector(".appointment-adult");
const kids = document.querySelector(".appointment-kids");

let appointmentForm = document.querySelector(".appointment-form");

let formOpen = document.querySelector(".appointment-source");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adult");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

if (storage) {
  adult.value = storage;
}

if (storage) {
  kids.value = storage;
}

formOpen.addEventListener("click", function() {
appointmentForm.classList.toggle("appointment-form-clos");
appointmentForm.classList.add("appointment-form-show");
});

appointmentForm.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adult.value)
    {evt.preventDefault ();
    appointmentForm.classList.remove("appointment-form-error");
    appointmentForm.offsetWidth = appointmentForm.offsetWidth;
    appointmentForm.classList.add("appointment-form-error");
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("kids", kids.value);}
  }
});
