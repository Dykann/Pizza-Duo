// const divReviews = [...document.querySelectorAll(".jxjCjc")];

// divReviews.map((element) => {
//   const customer = {
//     name: element.querySelector("a[href]").textContent,
//     comment: element.querySelector("span[jscontroller=P7L8k]").textContent,
//     review: element.querySelector(".Fam1ne").getAttribute("aria-label"),
//     date: element.querySelector(".dehysf").textContent,
//     photoUrl: element.parentNode.querySelector("img").src,
//   };
//   return customer;
// });

const slideshowImages = document.querySelectorAll(".slideshow-img");

const SPEED = 5000;
let currentImagePosition = 0;

slideshowImages[currentImagePosition].style.opacity = 1;

function nextImage() {
  slideshowImages[currentImagePosition].style.opacity = 0;
  currentImagePosition = currentImagePosition + 1;
  if (currentImagePosition === 3) {
    currentImagePosition = 0;
  }
  slideshowImages[currentImagePosition].style.opacity = 1;
}

setInterval(nextImage, SPEED);

const o = document.querySelector(".o-animation");
// console.log(o);

function oAnimation() {
  o.classList.add("open");
}

window.addEventListener("load", oAnimation);

const contentReplaced = document.querySelector(".navbar--item");
const reviewsUl = document.querySelector(".reviews");
console.log(reviewsUl);

fetch("https://netflixvirus.vercel.app/api/pizzaduo/4")
  .then((res) => res.json())
  .then((data) => {
    const reviewsHTML = data
      .map((review) => {
        const rate = review.review.slice(7, 8);
        return `<li class="review">
        <img class="review--avatar"src="${review.photoUrl}">
        <div class="review--content">
        <span class="review--name">${review.name}</span> 
        <span class="review--rate">${rate}/5
        </span><span class>${review.date}</span><p>${review.comment}</p>
        </div>
        </li>`;
      })
      .join("");
    console.log(reviewsHTML);
    console.log(data);
    reviewsUl.innerHTML = reviewsHTML;
  });
