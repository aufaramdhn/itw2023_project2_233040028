const scriptURL =
  "https://script.google.com/macros/s/AKfycbwiz4CjULzr-z6XcRGzfOhx5s8Bvxd7AYpxRCkrG_jCJYtazgTXblw-3EeQbfaIk_44/exec";
const form = document.forms["submit-to-google-sheet"];
const btnSend = document.querySelector(".send");
const loader = document.querySelector(".loaders");
const alertSuccess = document.querySelector(".alert-success");
const alertDanger = document.querySelector(".alert-danger");

function closeAlert(event) {
  let AlertClose = event.target;
  AlertClose.closest(".alert-close").remove();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.classList.toggle("none");
  btnSend.classList.toggle("none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnSend.classList.toggle("none");
      loader.classList.toggle("none");
      alertSuccess.classList.toggle("alert");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      btnSend.classList.toggle("none");
      loader.classList.toggle("none");
      alertDanger.classList.toggle("alert");
      form.reset();
      console.error("Error!", error.message);
    });
});
