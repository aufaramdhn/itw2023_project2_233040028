const scriptURL =
  "https://script.google.com/macros/s/AKfycbwiz4CjULzr-z6XcRGzfOhx5s8Bvxd7AYpxRCkrG_jCJYtazgTXblw-3EeQbfaIk_44/exec";
const form = document.forms["submit-to-google-sheet"];
const btnSend = document.querySelector(".send");
const loader = document.querySelector(".loaders");
const alertSuccess = document.querySelector(".alert-success");
const alertDanger = document.querySelector(".alert-warning");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      btnSend.classList.toggle("d-none");
      loader.classList.toggle("d-none");
      alertSuccess.classList.toggle("d-none");
      console.log("Success!", response);
    })
    .catch((error) => {
      form.reset();
      btnSend.classList.toggle("d-none");
      loader.classList.toggle("d-none");
      alertSuccess.classList.toggle("d-none");
      console.error("Error!", error.message);
    });
});
