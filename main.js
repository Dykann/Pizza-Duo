const divReviews = [...document.querySelectorAll(".jxjCjc")];

divReviews.map((element) => {
  const customer = {
    name: element.querySelector("a[href]").textContent,
    comment: element.querySelector("span[jscontroller=P7L8k]").textContent,
    review: element.querySelector(".Fam1ne").getAttribute("aria-label"),
    date: element.querySelector(".dehysf").textContent,
    photoUrl: element.parentNode.querySelector("img").src,
  };
  return customer;
});
