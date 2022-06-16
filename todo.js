// const button = document.querySelector("#btn");
const textInput = document.querySelector("#text");
const form = document.querySelector("#form");
const newText = document.querySelector("#newP");
// const lorem = document.querySelector("#lorem");

const post = document.querySelector("#posts");

form.addEventListener("submit", function (e) {
  if (textInput.value === "") {
    newText.innerHTML = "please write something";
  } else {
    post.innerHTML += `
    <div>
    <p>${textInput.value}</p>
    <span class="option">
        <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>

        <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>

    </span>
    </div>
`;

    newText.innerHTML = "";
    textInput.value = "";
  }
  e.preventDefault();
});

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

const editPost = (e) => {
  textInput.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
