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

const SPEED = 6000;
let currentImagePosition = 0;

function nextImage() {
  slideshowImages[currentImagePosition].style.opacity = 0;
  currentImagePosition = currentImagePosition + 1;
  if (currentImagePosition === 3) {
    currentImagePosition = 0;
  }
  slideshowImages[currentImagePosition].style.opacity = 1;
}

setInterval(nextImage, SPEED);

const reviewsUl = document.querySelector(".reviews");

function getGoogleReviews(max = 5) {
  fetch(`https://netflixvirus.vercel.app/api/pizzaduo/${max}`)
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
        </span><span class="review--date">${review.date}</span><p class="review--comment">${review.comment}</p>
        </div>
        </li>`;
        })
        .join("");
      reviewsUl.innerHTML = reviewsHTML;
    })
    .catch((error) => console.error(error));
}

getGoogleReviews(5);

const bannerCovid = document.querySelector(".banner-covid");
const bannerCovidResp = document.querySelector(".banner-resp");

function bannerAnimation() {
  bannerCovid.classList.add("open");
  bannerCovidResp.classList.add("open-resp");
}

window.addEventListener("load", bannerAnimation);

const linkAvis = document.querySelector(".link-avis");

function replaceId() {
  if (window.innerWidth <= 700) {
    linkAvis.id = "avis";
  }
}

replaceId();

function removeId() {
  if (window.innerWidth >= 700) {
    linkAvis.removeAttribute("id");
  }
}

removeId();

window.addEventListener("resize", removeId);
