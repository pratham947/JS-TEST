import Data from "./Data.js";

let container = document.querySelector(".container");

function displayArray(arr) {
  const newarr = [...arr];
  const res = [];
  while (newarr.length) {
    res.push(newarr.splice(~~(Math.random() * newarr.length), 1)[0]);
  }

  const Section = res.map(
    ({ img, title }) =>
      ` <div class="section-div">
        <div class="img-container">
            <img src=${img} alt="">
        </div>
        <div class="title-div">
          <p id="title">${title}</p>
        </div>
      </div>`
  );

  container.innerHTML = Section;
}

displayArray(Data);