const form = document.querySelector("#form");
const toast = document.querySelector("#toast");
const submit = document.querySelector("#submit");
const classe = document.querySelector("#class");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());
  classFunc(formData);
  tost(formData);
});

// ------------------------------------------------------

// Showing tost the message you entere
const tost = function (formData) {
  const showMassage = formData.showMassage;
  toast.style.display = "block";
  toast.textContent = showMassage;
  topOrBottom(formData);
};

// ------------------------------------------------------

// where is your locaiton??top or botoom , left or right and distance from relative position
let topOrBottom = function (formData) {
  //distance for top or bottom
  let distance1 = formData.distance1;
  //distance for left or right
  let distance2 = formData.distance2;

  // reset location
  toast.style.top = "";
  toast.style.bottom = "";
  toast.style.left = "";
  toast.style.right = "";
  // set locaition
  formData.loc1 === "top"
    ? (toast.style.top = `${distance1}px`)
    : (toast.style.bottom = `${distance1}px`);
  formData.loc2 === "left"
    ? (toast.style.left = `${distance2}px`)
    : (toast.style.right = `${distance2}px`);
};
// ------------------------------------------------------

// set the class from user input
let classFunc = function (formData) {
  toast.classList = `${formData.class}`;
};
